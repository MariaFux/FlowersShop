using FlowersShop.BLL.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlowersShop.BLL.Interfaces
{
    interface ICategoryService
    {
        Task<List<CategoryDTO>> GetCategoriesAsync();
        Task<List<CategoryForDropdownDTO>> GetCategoriesForDropdownAsync();
    }
}
