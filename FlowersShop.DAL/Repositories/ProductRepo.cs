using FlowersShop.DAL.DataContext;
using FlowersShop.DAL.DataObjects.ProductModels;
using FlowersShop.DAL.Entities;
using FlowersShop.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using FlowersShop.DAL.DataObjects;
using System.Threading.Tasks;
using System.Data;

namespace FlowersShop.DAL.Repositories
{
    public class ProductRepo : IProductRepo
    {
        private readonly FlowersShopDbContext _context;

        public ProductRepo(FlowersShopDbContext context)
        {
            _context = context;
        }

        public async Task<ProductModel> GetProductsAsync(GetProductsModel model)
        {
            var query = _context.Products.Where(x => 
                string.IsNullOrWhiteSpace(model.SearchValue) ||
                (x.Name ?? "").Contains(model.SearchValue) ||
                (x.Description ?? "").Contains(model.SearchValue)); ;

            var totalCount = await query.CountAsync();

            var result = await query
                .Select(x => new Product
                {
                    Id = x.Id,
                    PhotoPath = x.PhotoPath,
                    Name = x.Name,
                    Description = x.Description,
                    Price = x.Price,
                    CreationDate = x.CreationDate,
                    CategoryId = x.CategoryId
                })
                .OrderBy(model.FilterSortModel.SortingModels)
                .Filter(model.FilterSortModel.FilterModels)
                .Skip(model.FilterSortModel.Skip)
                .Take(model.FilterSortModel.Take)
                .ToListAsync();

            return new ProductModel
            {
                Data = result,
                TotalCount = totalCount
            };
        }
    }
}
