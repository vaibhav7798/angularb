import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';

console.log("inside contactus module");


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
