import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addressForm: FormGroup;
  addresses = [{ id: 1, name: 'г. Витебск, ул. Смоленская, д.5A, пом.28, ТЦ Европа, цокольный этаж' }];

  ngOnInit() {
    this.addressForm = new FormGroup({
      'address': new FormControl(1)
    });
  }
}
