import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  headerText = "Корзина";

  itemsToOrder: any[] = [{sdf: 1}];
  itemCount: number = 9;
  pricePerItem: number = 7;
  inStock = 100;
  isPickUpPoint = true;
  isDelivery = false;

  addressForm: FormGroup;
  deliveryForm: FormGroup;

  addresses = [{ id: 1, name: 'г. Витебск, ул. Смоленская, д.5A, пом.28, ТЦ Европа, цокольный этаж' }];

  constructor() {
  }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'surname': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required]),
      'address': new FormControl(1)
    });

    this.deliveryForm = new FormGroup({
      'surname': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required]),
      'street': new FormControl(null, Validators.required),
      'house': new FormControl(null, Validators.required),
      'flatNumber': new FormControl(null),
      'entrance': new FormControl(null),
      'floor': new FormControl(null),
    });
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

  onPickUpPointClick() {
    if (!this.isPickUpPoint) {
      this.isPickUpPoint = !this.isPickUpPoint;
      this.isDelivery = !this.isDelivery;
    }
  }

  onDeliveryClick() {
    if (!this.isDelivery) {
      this.isDelivery = !this.isDelivery;
      this.isPickUpPoint = !this.isPickUpPoint;
    }
  }
}
