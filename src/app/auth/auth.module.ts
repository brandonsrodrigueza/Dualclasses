import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../auth/login/login.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
  ],
  exports: [
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
