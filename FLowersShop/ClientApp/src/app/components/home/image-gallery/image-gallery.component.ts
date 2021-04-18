import { Component } from '@angular/core';

@Component({
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  public myStyle = {
    'background-color': '#f3f0fa',
    'background-image': "url('/assets/images/lily.png')",
      'background-repeat': 'no-repeat',
        'background-position': 'center right 35%'
           }
  constructor() { }
  public items: any[] = [
    { background: "#f3f0fa url('/assets/images/lily.png') no-repeat center right 35%;" },
    { background: "#f3f0fa url('/assets/images/lily.png') no-repeat center right 35%;" },
    { background: "#f3f0fa url('/assets/images/lily.png') no-repeat center right 35%;" },
    { background: 'https://bit.ly/2EcKcnD' },
    { background: 'https://bit.ly/2U9KYse' },
    { background: 'https://bit.ly/2EcLlLX' },
    { background: 'https://bit.ly/2Vr5jd9' }
  ];
}
