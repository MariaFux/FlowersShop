using System.Collections.Generic;
using FlowersShop.DAL.Entities;

namespace FlowersShop.DAL.DataObjects.ProductModels
{
    public class ProductModel
    {
        public List<Product> Data { get; set; }
        public int TotalCount { get; set; }
    }
}
