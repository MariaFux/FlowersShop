import { SortDescriptor } from "./sortDescriptor";
import { FilterModel } from "./filterModel";

export class FilterSort {
  filterModels: FilterModel[] = [];
  sortingModels: SortDescriptor[] = [];
  skip: number = 0;
  take: number = 10;
}
