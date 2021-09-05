import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  headerText = "Контакты";

  public address: string = "Витебск, ул. Смоленская 5A, пом. 28";

  constructor() {
  }
}
