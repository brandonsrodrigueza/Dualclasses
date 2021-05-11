import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { NopageComponent } from './nopage/nopage.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutesModule } from './auth/auth.routing';

const routes: Routes = [

  // path: '/dashboard' -> PagesRouting
  // path: '/auth' -> AuthRouting
  {path: '', redirectTo:'/dashboard',pathMatch:'full'},
  {path: '**', component: NopageComponent}
]
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutesModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
