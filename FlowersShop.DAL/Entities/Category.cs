using System;
using System.Collections.Generic;
using System.Text;

namespace FlowersShop.DAL.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string PhotoPath { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
