using AutoMapper;
using FlowersShop.BLL.DTO;
using FlowersShop.DAL.DataObjects.CategoryModels;
using FlowersShop.DAL.Entities;

namespace FlowersShop.BLL.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Product, ProductDTO>().ReverseMap();
            CreateMap<CategoryForDropdown, CategoryForDropdownDTO>().ReverseMap();
        }
    }
}
