using FlowersShop.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FlowersShop.BLL.Interfaces
{
    interface ICategoryService
    {
        Task<List<CategoryDTO>> GetCategoriesAsync();
    }
}
