import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { HomeModule } from './home/home.module';
//import { ContactusModule } from './contactus/contactus.module';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';
//import { CharactersonlyDirective } from './charactersonly.directive';
import { FormsComponent } from './forms/forms.component';
import { SearchtextPipe } from './searchtext.pipe';
import { CurrencyPipe } from './currency.pipe';
import { SharedModule } from './shared/shared.module';
import { ApplicationlandingComponent } from './applicationlanding/applicationlanding.component';
import { AppLandingComponent } from './app-landing/app-landing.component';

@NgModule({
  declarations: [  //component+directives+pipes
    AppComponent,
    UserComponent,
    DataBindingComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DirectivesComponent,
    //CharactersonlyDirective,  delete and write in shared module (bcoz avoid error) 
    FormsComponent,
    SearchtextPipe,
    CurrencyPipe,
    ApplicationlandingComponent,
    AppLandingComponent,
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    //HomeModule,  //egarly loaded
    //ContactusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
