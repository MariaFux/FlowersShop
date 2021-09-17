import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/categories/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-sections-cards',
  templateUrl: './sections-cards.component.html',
  styleUrls: ['./sections-cards.component.css']
})
export class SectionsCardsComponent implements OnInit {
  constructor(private categoryService: CategoryService) {
  }

  categories: Category;

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
}
