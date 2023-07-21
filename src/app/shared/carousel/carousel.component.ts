import { Component, Input } from '@angular/core';
import { IDetailSite } from 'src/app/models/information/m.information';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() detail: IDetailSite | undefined;

  activeSlideIndex: number = 0;
  
  ngAfterViewInit() {
    setInterval(() => {
      if (this.detail && this.detail.images) {
        this.activeSlideIndex = (this.activeSlideIndex + 1) % this.detail.images.length;
      }
    }, 3000);
  }
}
