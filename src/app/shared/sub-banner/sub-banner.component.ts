import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sub-banner',
  templateUrl: './sub-banner.component.html',
  styleUrls: ['./sub-banner.component.scss']
})
export class SubBannerComponent {

  @Input() title: string = '';
  @Input() content: string = '';

  public expanded: boolean = false;
  public showButton: boolean = false;

  @ViewChild('expandableTextElement') expandableTextElement!: ElementRef<HTMLDivElement>;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {  this.checkShowMoreButton(); } , 500);
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  private checkShowMoreButton() {
    const parrafoElement = this.expandableTextElement.nativeElement;
    const computedStyle = getComputedStyle(parrafoElement);
    const lineHeight = parseInt(computedStyle.lineHeight, 10);
    const alturaParrafo = parrafoElement.clientHeight;
    const numeroLineas = Math.floor(alturaParrafo / lineHeight);
    this.showButton = (numeroLineas >= 5);
    this.expanded = this.showButton;
    this.cdRef.detectChanges();
  }
}
