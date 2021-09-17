import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/categories/category.model';
import { CategoryForDropdown } from '../models/categories/categoryForDropdown.model';

@Injectable({providedIn: 'root'})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category>('api/category/GetCategoriesAsync');
  }

  getCategoriesForDropdown() {
    return this.http.get<CategoryForDropdown[]>('api/category/GetCategoriesForDropdownAsync');
  }
}
