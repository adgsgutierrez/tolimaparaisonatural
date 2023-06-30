import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-banner',
  templateUrl: './sub-banner.component.html',
  styleUrls: ['./sub-banner.component.scss']
})
export class SubBannerComponent implements OnInit {

  @Input() title: string = '';
  @Input() content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
