import { Component, Input, OnInit } from '@angular/core';
import { IDetailSite } from 'src/app/models/information/m.information';

@Component({
  selector: 'app-section-informative',
  templateUrl: './section-informative.component.html',
  styleUrls: ['./section-informative.component.scss']
})
export class SectionInformativeComponent implements OnInit {

  @Input() detail: IDetailSite | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
