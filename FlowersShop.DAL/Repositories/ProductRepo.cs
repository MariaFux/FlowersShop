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
            var query = _context.Products;

            var totalCount = await query.CountAsync();

            var result = await query
                .Select(x => new Product
                {
                    Id = x.Id,
                    PhotoPath = x.PhotoPath,
                    Name = x.Name,
                    Description = x.Description,
                    Price = x.Price,
                    CategoryId = x.CategoryId
                })
                .OrderBy(model.ListSortModel.SortingModels)
                .Skip(model.ListSortModel.Skip)
                .Take(model.ListSortModel.Take)
                .ToListAsync();

            return new ProductModel
            {
                Data = result,
                TotalCount = totalCount
            };
        }
    }
}
