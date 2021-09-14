﻿using FlowersShop.DAL.DataObjects.ProductModels;
using System.Threading.Tasks;

namespace FlowersShop.DAL.Interfaces
{
    interface IProductRepo
    {
        Task<ProductModel> GetProductsAsync(GetProductsModel model);
    }
}
