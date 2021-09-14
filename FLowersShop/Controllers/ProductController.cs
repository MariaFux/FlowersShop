using FlowersShop.BLL.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FlowersShop.DAL.DataObjects.ProductModels;

namespace FlowersShop.Areas.Category.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
        [Route("GetProductsAsync")]
        public async Task<ActionResult> GetProductsAsync([FromBody] GetProductsModel model)
        {
            var products = await _productService.GetProductsAsync(model);

            return Json(products);
        }
    }
}
