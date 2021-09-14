using AutoMapper;
using FlowersShop.BLL.Interfaces;
using FlowersShop.DAL.DataObjects.ProductModels;
using FlowersShop.DAL.Repositories;
using System.Threading.Tasks;

namespace FlowersShop.BLL.Services
{
    public class ProductService : IProductService
    {
        private readonly ProductRepo _productRepo;
        private readonly IMapper _mapper;

        public ProductService(ProductRepo productRepo, IMapper mapper)
        {
            _productRepo = productRepo;
            _mapper = mapper;
        }

        public async Task<ProductModel> GetProductsAsync(GetProductsModel model)
        {
            var products = await _productRepo.GetProductsAsync(model);
            return products;
        }
    }
}
