import { Component, OnInit } from '@angular/core';
import { IBanner, ICard, ISubBanner } from './../../models/information/m.information';
import { GetDataService } from './../../services/get-data/get-data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public banner: IBanner = { imgBanner: '' , textBanner: '', version: '' };
  public subBanner: ISubBanner = { title: '', content: '', version: ''};
  public isError: boolean = false;
  public cards: ICard[] = [];
  
  constructor(private serviceGetData: GetDataService) { }

  ngOnInit(): void {
    this.isError = false;
    forkJoin({
      banner: this.serviceGetData.getBannerInformation(),
      subbanner: this.serviceGetData.getSubBannerInformation(),
      cards: this.serviceGetData.getCardsInformation()
    }).subscribe({
      next: value =>{
        this.banner = value.banner;
        this.subBanner = value.subbanner;
        this.cards = value.cards;
        console.log(this.cards);
      },
      error: _e =>{
        console.error(_e);
      }
    });
  }

}
