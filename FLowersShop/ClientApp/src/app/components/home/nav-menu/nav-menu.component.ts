import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  public address: string = "Витебск, ул. Смоленская 5A, пом. 28";
  private url: string = "https://www.google.com/maps/place/%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD+%C2%AB%D0%90%D1%81%D1%82%D1%80%D0%B0%C2%BB/@55.1811133,30.2301514,16.25z/data=!4m9!1m2!2m1!1z0LDRgdGC0YDQsA!3m5!1s0x0:0x93e74ffae15c81ef!8m2!3d55.1823006!4d30.2310356!15sCgrQsNGB0YLRgNCwkgEHZmxvcmlzdA"

  onAddressClick() {
    window.open(this.url, '_blank');
  }
}
