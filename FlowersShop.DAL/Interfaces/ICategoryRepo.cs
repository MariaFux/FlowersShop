using FlowersShop.DAL.DataObjects.CategoryModels;
using FlowersShop.DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlowersShop.DAL.Interfaces
{
    interface ICategoryRepo
    {
        Task<List<Category>> GetCategoriesAsync();
        Task<List<CategoryForDropdown>> GetCategoriesForDropdownAsync();
    }
}
