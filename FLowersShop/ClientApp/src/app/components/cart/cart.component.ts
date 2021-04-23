import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  itemsToOrder: any[] = [{sdf: 1}];
  itemCount: number = 9;
  pricePerItem: number = 7;
  inStock = 100;

  constructor() {
  }

  minus() {
    if (this.itemCount > 1) {
      this.itemCount--;
    } else {
      return;
    }
  }

  plus() {
    if (this.itemCount < this.inStock) {
      this.itemCount++;
    } else {
      return;
    }
  }
}
