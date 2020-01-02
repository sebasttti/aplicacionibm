import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
      HomeComponent,
      BannerComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      MaterialModule
    ]
  })
  export class HomeModule {}
