using FlowersShop.BLL.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FlowersShop.Areas.Category.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly CategoryService _categoryService;

        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        [Route("GetCategoriesAsync")]
        public async Task<ActionResult> GetCategoriesAsync()
        {
            var categories = await _categoryService.GetCategoriesAsync();

            return Json(categories);
        }

        [HttpGet]
        [Route("GetCategoriesForDropdownAsync")]
        public async Task<ActionResult> GetCategoriesForDropdownAsync()
        {
            var categories = await _categoryService.GetCategoriesForDropdownAsync();

            return Json(categories);
        }
    }
}
