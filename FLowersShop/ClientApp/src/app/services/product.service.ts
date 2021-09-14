import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(searchModel: any): Observable<any> {
    return this.http.post<any>('api/product/GetProductsAsync', searchModel);
  }
}
