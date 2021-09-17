import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, take, takeUntil } from 'rxjs/operators';
import { CategoryForDropdown } from '../../models/categories/categoryForDropdown.model';
import { FilterSort } from '../../models/common/filter-sort.model';
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

  products: Product;
  categories: CategoryForDropdown[] = [];

  searchValue = '';
  searchSubject = new Subject();

  filterSortState: FilterSort = new FilterSort();

  gridData: GridData = {
    data: [],
    total: 0
  };

  isLoading = false;

  private unsubscribeAll$ = new Subject<void>();
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.route.queryParams.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(x => {
        if (!!x) {
          this.loadData();
        } else {
          //load based on filterBy query parameter
        }
      });
  }

  ngOnInit() {
    this.loadCategories();

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
}
