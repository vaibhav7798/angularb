import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminParentComponent } from './admin-parent/admin-parent.component';
import { Adminchild2Component } from './adminchild2/adminchild2.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminParentComponent,
    Adminchild2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
