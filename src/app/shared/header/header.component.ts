import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconFileName: string = 'assets/imgs/icon_list.svg';
  buttonClicked: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public getClassActive(url: string): string{
    if(url === this.route.url.split('?')[0])
      return 'active';
    return '';
  }


  handleClick() {
    this.buttonClicked = !this.buttonClicked;
    this.iconFileName = this.buttonClicked ? 'assets/imgs/close_list_icon.svg' : 'assets/imgs/icon_list.svg';
  }
}
