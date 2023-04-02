import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';

const routes: Routes = [
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'templatedriven',component:TemplatedrivenComponent},
  {path:'loginsucess',component:LoginsucessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularformsRoutingModule { }
