import { Component } from '@angular/core';
import { ParentDataService } from './services/parent-data/parent-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tolima.paraiso.natural';
  public load = true;

  constructor(protected service: ParentDataService){
  }
  ngOnInit(): void {
    this.service.sincronize().subscribe( _load => {
      console.log('Load', _load)
      this.load = false
    } );
  }
}
