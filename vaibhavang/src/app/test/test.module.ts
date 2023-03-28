import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestContactComponent } from './test-contact/test-contact.component';


@NgModule({
  declarations: [
    TestHomeComponent,
    TestContactComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
