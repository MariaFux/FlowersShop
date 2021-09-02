import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  public address: string = "Витебск, ул. Смоленская 5A, пом. 28";
  private url: string = "https://www.google.com/maps/place/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA/@55.1939583,30.1248546,12z/data=!3m1!4b1!4m5!3m4!1s0x46c573e3fc7c7be7:0x430637d0624afff4!8m2!3d55.1926809!4d30.206359"

  onAddressClick() {
    window.open(this.url, '_blank');
  }
}
