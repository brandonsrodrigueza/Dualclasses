import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modulos
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module'; 
import { PagesModule } from './pages/pages.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

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
    PagesModule,
    ReactiveFormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
