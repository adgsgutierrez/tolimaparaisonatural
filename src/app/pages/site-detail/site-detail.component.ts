import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDetailSite } from 'src/app/models/information/m.information';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})
export class SiteDetailComponent implements OnInit {

  public detail: IDetailSite[] = [];

  public load: boolean = false;

  constructor(private getDataService: GetDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.load = true;
    this.route.queryParamMap.subscribe( params => {
      const id =  params.get('card') || '';
      this.getDataService.getIdDetail( parseInt(id)).subscribe( response => { 
        this.load = false;
        this.detail = response; 
      });
    });
    
  }

}
