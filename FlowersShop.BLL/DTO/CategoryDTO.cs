using System;
using System.Collections.Generic;
using System.Text;

namespace FlowersShop.BLL.DTO
{
    public class CategoryDTO
    {
        public int Id { get; set; }
        public string PhotoPath { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<ProductDTO> Products { get; set; }
    }
}
