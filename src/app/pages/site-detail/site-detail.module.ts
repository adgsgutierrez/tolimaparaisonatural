import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteDetailComponent } from './site-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';

const routes: Routes = [{ path: '', component: SiteDetailComponent }];

@NgModule({
  declarations: [
    SiteDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SiteDetailModule { }
