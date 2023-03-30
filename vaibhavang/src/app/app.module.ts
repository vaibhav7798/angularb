import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { ContactusModule } from './contactus/contactus.module';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [  //component+directives+pipes
    AppComponent,
    UserComponent,
    DataBindingComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DirectivesComponent,
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HomeModule,  //egarly loaded
    //ContactusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
