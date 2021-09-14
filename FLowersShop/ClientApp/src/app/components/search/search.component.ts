import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, take, takeUntil } from 'rxjs/operators';
import { FilterSort } from '../../models/filter-sort.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  headerText = "Каталог";

  products: Product;

  searchValue = '';
  searchSubject = new Subject();

  filterSortState: FilterSort = new FilterSort();

  private unsubscribeAll$ = new Subject<void>();
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.queryParams.pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(x => {
        if (!!x) {
          this.loadData(); //loaded all
        } else {
          //load based on filterBy query parameter
        }
      });
  }

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(1000), takeUntil(this.unsubscribeAll$))
      .subscribe(() => this.loadData());
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  loadData() {
    let searchModel = {
      filterSortModel: this.filterSortState,
      searchValue: this.searchValue
    }

    this.productService.getProducts(searchModel)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(x => {
        console.log(x);
      })
  }
}
