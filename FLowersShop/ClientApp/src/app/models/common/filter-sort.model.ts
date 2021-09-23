import { SortDescriptor } from "./sortDescriptor";
import { FilterModel } from "./filterModel";

export class FilterSort {
  filterModels: FilterModel[] = [];
  sortingModels: SortDescriptor[] = [];
  pageIndex: number = 1;
  pageSize: number = 12;
}
