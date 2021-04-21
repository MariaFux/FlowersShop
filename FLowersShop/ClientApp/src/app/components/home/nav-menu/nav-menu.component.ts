import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  menuToggle() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      x.style.alignItems = "center";
      x.style.flexDirection = "column";
      x.style.width = "100%";
    }
  }
}
