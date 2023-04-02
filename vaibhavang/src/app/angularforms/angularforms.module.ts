import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveformComponent,
    TemplatedrivenComponent,
  ],
  imports: [
    CommonModule,
    AngularformsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AngularformsModule { }
