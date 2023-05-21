import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login.module').then( m => m.LoginModule ),
  },
  {
    path: 'register',
    loadChildren: () => import('./components/auth/register/register.module').then( m => m.RegisterModule ),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

