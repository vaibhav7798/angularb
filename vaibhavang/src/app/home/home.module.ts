import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

console.log("inside home module");


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    HomeComponent,
    LandingComponent
  ]
})
export class HomeModule { }
