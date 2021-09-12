using FlowersShop.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FlowersShop.DAL.Interfaces
{
    interface ICategoryRepo
    {
        Task<List<Category>> GetCategoriesAsync();
    }
}
