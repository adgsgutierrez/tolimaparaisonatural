import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { SubBannerComponent } from './sub-banner/sub-banner.component';
import { RouterModule } from '@angular/router';
import { SectionInformativeComponent } from './section-informative/section-informative.component';
import { CarouselComponent } from './carousel/carousel.component';
import * as Hammer from 'hammerjs';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  override = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}


@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    BannerComponent,
    FooterComponent,
    SubBannerComponent,
    SectionInformativeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HammerModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    BannerComponent,
    FooterComponent,
    SubBannerComponent,
    SectionInformativeComponent,
    CarouselComponent
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class SharedModule { }
