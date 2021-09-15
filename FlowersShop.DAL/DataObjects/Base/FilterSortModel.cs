using System.Collections.Generic;

namespace FlowersShop.DAL.DataObjects.Base
{
    public class FilterSortModel
    {
        public List<FilterModel> FilterModels { get; set; }
        public List<SortingModel> SortingModels { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }
    }
}
