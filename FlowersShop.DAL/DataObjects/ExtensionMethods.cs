using FlowersShop.DAL.DataObjects.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace FlowersShop.DAL.DataObjects
{
    public static class ExtensionMethods
    {
        public static IQueryable<TEntity> OrderBy<TEntity>(this IQueryable<TEntity> source,
           List<SortingModel> sortingModels)
        {
            for (var i = 0; i < sortingModels.Count; i++)
            {
                var sortingModel = sortingModels[i];
                if (string.IsNullOrWhiteSpace(sortingModel.Dir))
                    break;

                var isDesc = sortingModel.Dir.Equals("desc", StringComparison.InvariantCultureIgnoreCase);
                source = source.OrderBy(sortingModel.Field, isDesc, i != 0);
            }

            return source;
        }

        private static IQueryable<TEntity> OrderBy<TEntity>(this IQueryable<TEntity> source,
            string orderByProperty, bool desc, bool isSecondary = false)
        {
            if (string.IsNullOrWhiteSpace(orderByProperty))
            {
                return source;
            }

            var command = desc ?
                isSecondary ? "ThenByDescending" : "OrderByDescending" :
                isSecondary ? "ThenBy" : "OrderBy";


            var type = typeof(TEntity);
            var property = type.GetProperty(orderByProperty, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);


            var parameter = Expression.Parameter(type, "p");
            var propertyAccess = Expression.MakeMemberAccess(parameter, property);
            var orderByExpression = Expression.Lambda(propertyAccess, parameter);
            var resultExpression = Expression.Call(typeof(Queryable), command, new Type[] { type, property.PropertyType },
                source.Expression, Expression.Quote(orderByExpression));

            return (IOrderedQueryable<TEntity>)source.Provider.CreateQuery<TEntity>(resultExpression);
        }

        public static IQueryable<TEntity> Filter<TEntity>(this IQueryable<TEntity> source, List<FilterModel> filters)
        {
            if (filters == null || filters.Count == 0)
            {
                return source;
            }

            var type = typeof(TEntity);
            var xParameter = Expression.Parameter(type, "x");
            Expression finalExpression = null;

            foreach (var filter in filters)
            {
                var property = type.GetProperty(filter.PropertyName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

                var xProperty = Expression.Property(xParameter, filter.PropertyName);

                Expression expression = null;

                object parsedFilterValue = ChangeType(filter.Value, property.PropertyType);

                switch (filter.OperatorName)
                {
                    case "eq":
                        expression = Expression.Equal(xProperty, Expression.Constant(parsedFilterValue));
                        break;
                    default:
                        continue;
                }

                finalExpression = finalExpression == null
                    ? expression
                    : Expression.AndAlso(finalExpression, expression);
            }

            var lambdaExpression = Expression.Lambda<Func<TEntity, bool>>(finalExpression, xParameter);

            return source.Where(lambdaExpression);
        }

        private static object ChangeType(object value, Type conversion)
        {
            var t = conversion;

            if (t.IsGenericType && t.GetGenericTypeDefinition().Equals(typeof(Nullable<>)))
            {
                if (value == null)
                {
                    return null;
                }

                t = Nullable.GetUnderlyingType(t);
            }
            if (conversion.IsEnum)
                return Enum.Parse(conversion, (string)value);

            return Convert.ChangeType(value, t);
        }
    }
}
