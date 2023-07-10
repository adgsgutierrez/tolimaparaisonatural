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
  ]
})
export class SharedModule { }
