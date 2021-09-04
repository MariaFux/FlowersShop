import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private viewportScroller: ViewportScroller) { }

  toTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
