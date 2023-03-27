import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutuslandingComponent } from './aboutuslanding/aboutuslanding.component';
import { AboutusdetailsComponent } from './aboutusdetails/aboutusdetails.component';

console.log("abbout us module...");


@NgModule({
  declarations: [
    AboutuslandingComponent,
    AboutusdetailsComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }
