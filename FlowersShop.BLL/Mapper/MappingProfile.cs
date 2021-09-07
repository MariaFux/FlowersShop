using AutoMapper;
using FlowersShop.BLL.DTO;
using FlowersShop.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlowersShop.BLL.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Product, ProductDTO>().ReverseMap();
        }
    }
}
