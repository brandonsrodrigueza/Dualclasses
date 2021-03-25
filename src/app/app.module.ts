import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modulos
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'; 
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { NopageComponent } from './nopage/nopage.component';




@NgModule({
  declarations: [
    AppComponent,

    NopageComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
