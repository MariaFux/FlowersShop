using FlowersShop.DAL.DataObjects.Base;

namespace FlowersShop.DAL.DataObjects.ProductModels
{
    public class GetProductsModel
    {
        public FilterSortModel FilterSortModel { get; set; }
        public string SearchValue { get; set; }
    }
}
