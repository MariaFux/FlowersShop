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
    }
}
