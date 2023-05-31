import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';

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
    path: 'feed',
    component: FeedComponent
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

