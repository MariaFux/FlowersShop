using AutoMapper;
using FlowersShop.BLL.DTO;
using FlowersShop.BLL.Interfaces;
using FlowersShop.DAL.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlowersShop.BLL.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly CategoryRepo _categoryRepo;
        private readonly IMapper _mapper;

        public CategoryService(CategoryRepo categoryRepo, IMapper mapper)
        {
            _categoryRepo = categoryRepo;
            _mapper = mapper;
        }

        public async Task<List<CategoryDTO>> GetCategoriesAsync()
        {
            var categories = await _categoryRepo.GetCategoriesAsync();
            var categoriesDTO = _mapper.Map<List<CategoryDTO>>(categories);
            return categoriesDTO;
        }

        public async Task<List<CategoryForDropdownDTO>> GetCategoriesForDropdownAsync()
        {
            var categories = await _categoryRepo.GetCategoriesForDropdownAsync();
            var categoriesDTO = _mapper.Map<List<CategoryForDropdownDTO>>(categories);
            return categoriesDTO;
        }
    }
}
