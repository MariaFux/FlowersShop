using FlowersShop.DAL.DataObjects.ProductModels;
using System.Threading.Tasks;

namespace FlowersShop.BLL.Interfaces
{
    interface IProductService
    {
        Task<ProductModel> GetProductsAsync(GetProductsModel model);
    }
}
