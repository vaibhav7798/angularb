import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{path:'user', component : UserComponent},
{path:'dataBinding',component:DataBindingComponent},
//{path:'**',component:PageNotFoundComponent}//wlid/universal card routing
 {path:'HomeModule_home',component:HomeComponent},
 {path:'HomeModule_landing',component:LandingComponent},
 {path:'directives',component:DirectivesComponent}, 
 {path:'forms',component:FormsComponent},

 //lazy loading
 {path:'home-module',loadChildren :()=>import('./home/home.module').then(mod=>mod.HomeModule)},
 {path:'aboutus-module',loadChildren:()=>import('./aboutus/aboutus.module').then(mod=>mod.AboutusModule)},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

{path:'testModule',loadChildren:()=>import('./test/test.module').then(mod=>mod.TestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
