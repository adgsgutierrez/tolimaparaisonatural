import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/information/m.information';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card?: ICard;

  constructor() { }

  ngOnInit(): void {
  }

  public isValidateUrl(url: string = ''): boolean {
    if(url === '' ) return false;
    if(url.indexOf('http') === -1) return false;
    return true;
  }
}
