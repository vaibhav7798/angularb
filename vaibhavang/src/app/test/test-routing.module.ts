import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestContactComponent } from './test-contact/test-contact.component';
import { TestHomeComponent } from './test-home/test-home.component';

const routes: Routes = [
  {path:'',component:TestHomeComponent},
  {path:'test-contact',component:TestContactComponent},
  {path:'test-home',component:TestHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
