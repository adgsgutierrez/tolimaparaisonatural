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
  public maxCharacters: number = 0;

  @ViewChild('expandableTextElement') expandableTextElement!: ElementRef<HTMLDivElement>;

  constructor(private elementRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  ngAfterViewChecked() {
    this.checkShowMoreButton();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  private checkShowMoreButton() {
    const parrafo = this.elementRef.nativeElement.querySelector('#description');
    const lineHeight = parseInt(getComputedStyle(parrafo).lineHeight);
    const height = parrafo.offsetHeight;
    const lineCount = Math.ceil(height / lineHeight);
    this.maxCharacters = lineCount;
    if (this.maxCharacters > 5) {
      console.log("holi");
      this.showButton = true;
    }

    this.cdRef.detectChanges();
  }
}
