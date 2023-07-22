import { Component, ElementRef, Input, ViewChildren } from '@angular/core';
import { IDetailSite } from 'src/app/models/information/m.information';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() detail: IDetailSite | undefined;
  @ViewChildren('carouselImages') carousel!: ElementRef<HTMLImageElement>[];

  activeSlideIndex: number = 0;
  activeload: number = 0;
  isLoadCarousel: boolean = false;

  ngOnInit(): void {
    this.activeload = 0 ;
    this.isLoadCarousel = false;
  }

  ngAfterViewInit() {
    console.log(this.carousel);
    this.carousel.forEach((element, index) => {
      element.nativeElement.onload = () => this.loadImage(index);
      const detail: any = this.detail;
      const route: string = detail?.images[index] || '';
      element.nativeElement.src = route;
    });
  }

  loadImage(index: number): void{
    console.log(index);
    this.activeload += index;
    if(this.activeload == this.detail?.images?.length){
      this.isLoadCarousel = true;
    }
  }

  swipeleftActive($event: any): void {
    this.slideRun(true);
  }

  swipeRightActive($event: any): void {
    this.slideRun(false);
  }

  private slideRun(next: boolean): void {
    let counter = 0;
    if (this.detail && this.detail.images) {
      counter = (next) ? 1 : -1;
      this.activeSlideIndex = 
        ( this.activeSlideIndex + counter) < 0 ? 
          this.detail.images.length - 1 : 
            (this.activeSlideIndex + counter) % this.detail.images.length;
    }
  }
}
