import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInformativeComponent } from './section-informative.component';

describe('SectionInformativeComponent', () => {
  let component: SectionInformativeComponent;
  let fixture: ComponentFixture<SectionInformativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInformativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInformativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
