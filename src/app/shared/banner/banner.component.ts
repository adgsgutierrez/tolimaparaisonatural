import { Component, Input, OnInit } from '@angular/core';
import { UtilsDevice } from 'src/app/utils/utils.device';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() imageBanner = '';
  @Input() textBanner = '';

  constructor() { }

  ngOnInit(): void {
  }

  public getLabelStyle(): string {
    return UtilsDevice.isDevice() ? 'text-banner-mobile' : 'text-banner-desktop'
  }

  public getImage(): string {
    return `--background_banner_image: url(\'${this.imageBanner}\')`;
  }
}
