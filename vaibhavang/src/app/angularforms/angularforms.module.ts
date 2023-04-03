import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlphanumericDirective } from './alphanumeric.directive';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';


@NgModule({
  declarations: [
    ReactiveformComponent,
    TemplatedrivenComponent,
    AlphanumericDirective,
    LoginsucessComponent,
  ],
  imports: [
    CommonModule,
    AngularformsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,   
  ]
})
export class AngularformsModule { }
