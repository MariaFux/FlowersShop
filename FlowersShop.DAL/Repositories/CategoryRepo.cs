using FlowersShop.DAL.DataContext;
using FlowersShop.DAL.DataObjects.CategoryModels;
using FlowersShop.DAL.Entities;
using FlowersShop.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersShop.DAL.Repositories
{
    public class CategoryRepo : ICategoryRepo
    {
        private readonly FlowersShopDbContext _context;

        public CategoryRepo(FlowersShopDbContext context)
        {
            _context = context;
        }

        public async Task<List<Category>> GetCategoriesAsync()
        {
            return await _context.Categories.ToListAsync();
        }
        
        public async Task<List<CategoryForDropdown>> GetCategoriesForDropdownAsync()
        {
            return await _context.Categories
                .Select(x => new CategoryForDropdown
                {
                    Id = x.Id,
                    Name = x.Name
                })
                .ToListAsync();
        }
    }
}
