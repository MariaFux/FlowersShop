import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, take, takeUntil } from 'rxjs/operators';
import { CategoryForDropdown } from '../../models/categories/categoryForDropdown.model';
import { FilterSort } from '../../models/common/filter-sort.model';
import { FilterModel } from '../../models/common/filterModel';
import { FilterOperators } from '../../models/common/filterOperators';
import { SortDescriptor } from '../../models/common/sortDescriptor';
import { GridData } from '../../models/common/gridData';
import { Product } from '../../models/products/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  headerText = "Каталог";

  categories: CategoryForDropdown[] = [];

  selectedCategory = 0;

  searchValue = '';
  searchSubject = new Subject();

  filterSortState: FilterSort = new FilterSort();

  gridData: GridData = {
    data: [],
    total: 0
  };

  filterForm: FormGroup;

  isLoading = false;

  isNew = false;
  isOld = false;
  isFromLowPrice = false;
  isFromHighPrice = false;
  isAscName = false;
  isDescName = false;

  private unsubscribeAll$ = new Subject<void>();
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    this.route.queryParams.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(x => {
        if (Object.keys(x).length == 0) {
          this.selectedCategory = 0;
        } else {
          this.selectedCategory = +x.filterBy;          
        }        
      });
  }

  ngOnInit() {
    this.loadCategories();

    this.filterForm = this.fb.group({
      categoryId: this.fb.group({
        value: [''],
        operator: [FilterOperators.equal]
      })
    });

    this.filterForm.valueChanges.pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(newFormVals => {
        this.updateFilters(newFormVals);
      });

    let categoryControlValue: FormControl = this.filterForm.get("categoryId.value") as FormControl;
    categoryControlValue.setValue(this.selectedCategory);

    this.searchSubject.pipe(debounceTime(1000), takeUntil(this.unsubscribeAll$))
      .subscribe(() => this.loadData());
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  loadCategories() {
    this.categoryService.getCategoriesForDropdown()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(categories => this.categories = categories);
  }

  loadData() {
    let searchModel = {
      filterSortModel: this.filterSortState,
      searchValue: this.searchValue
    }

    this.isLoading = true;

    this.productService.getProducts(searchModel)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(
        x => this.gridData = {
            data: x.data,
            total: x.total
        },
        err => { },
        () => setTimeout(x => this.isLoading = false, 200)
      );
  }

  searchValueChanged() {
    this.searchSubject.next();
  }

  searchValuePasted() {
    setTimeout(() => this.searchSubject.next(), 0);
  }

  updateFilters(newFormVals: Object): void {
    this.filterSortState.filterModels = [];
    Object.keys(newFormVals).forEach(key => {
      const formFilter = newFormVals[key];
      if (formFilter.value) {
        if (Array.isArray(formFilter.value)) {
          formFilter.value = formFilter.value.toString();
        }
        const filterEl: FilterModel = new FilterModel(key, formFilter.operator, formFilter.value);
        this.filterSortState.filterModels.push(filterEl);
      }
    });

    this.loadData();
  }

  onCategoryChange(category: any) {
    let categoryControlValue: FormControl = this.filterForm.get("categoryId.value") as FormControl;

    categoryControlValue.setValue(category.value);
  }

  onNewClick(field: string, dir: any) {
    this.filterSortState.sortingModels = [];

    this.isNew = !this.isNew;
    this.isOld = false;
    this.isFromLowPrice = false;
    this.isFromHighPrice = false;
    this.isAscName = false;
    this.isDescName = false;

    if (this.isNew) {
      const sortingEl: SortDescriptor = { field: field, dir: dir };
      this.filterSortState.sortingModels.push(sortingEl);
    }

    this.loadData();
  }

  onOldClick(field: string, dir: any) {
    this.filterSortState.sortingModels = [];

    this.isOld = !this.isOld;
    this.isNew = false;
    this.isFromLowPrice = false;
    this.isFromHighPrice = false;
    this.isAscName = false;
    this.isDescName = false;

    if (this.isOld) {
      const sortingEl: SortDescriptor = { field: field, dir: dir };
      this.filterSortState.sortingModels.push(sortingEl);
    }

    this.loadData();
  }

  onFromLowPriceClick(field: string, dir: any) {
    this.filterSortState.sortingModels = [];

    this.isFromLowPrice = !this.isFromLowPrice;
    this.isNew = false;
    this.isOld = false;
    this.isFromHighPrice = false;
    this.isAscName = false;
    this.isDescName = false;

    if (this.isFromLowPrice) {
      const sortingEl: SortDescriptor = { field: field, dir: dir };
      this.filterSortState.sortingModels.push(sortingEl);
    }

    this.loadData();
  }

  onFromHighPriceClick(field: string, dir: any) {
    this.filterSortState.sortingModels = [];

    this.isFromHighPrice = !this.isFromHighPrice;
    this.isNew = false;
    this.isOld = false;
    this.isFromLowPrice = false;
    this.isAscName = false;
    this.isDescName = false;

    if (this.isFromHighPrice) {
      const sortingEl: SortDescriptor = { field: field, dir: dir };
      this.filterSortState.sortingModels.push(sortingEl);
    }

    this.loadData();
  }

  onAscNameClick(field: string, dir: any) {
    this.filterSortState.sortingModels = [];

    this.isAscName = !this.isAscName;
    this.isNew = false;
    this.isOld = false;
    this.isFromLowPrice = false;
    this.isFromHighPrice = false;
    this.isDescName = false;

    if (this.isAscName) {
      const sortingEl: SortDescriptor = { field: field, dir: dir };
      this.filterSortState.sortingModels.push(sortingEl);
    }

    this.loadData();
  }

  onDescNameClick(field: string, dir: any) {
    this.filterSortState.sortingModels = [];

    this.isDescName = !this.isDescName;
    this.isNew = false;
    this.isOld = false;
    this.isFromLowPrice = false;
    this.isFromHighPrice = false;
    this.isAscName = false;

    if (this.isDescName) {
      const sortingEl: SortDescriptor = { field: field, dir: dir };
      this.filterSortState.sortingModels.push(sortingEl);
    }

    this.loadData();
  }
}
