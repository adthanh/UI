import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/core/guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main-modules/main-modules.module').then(m => m.MainModulesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: []
  },
  {
    path: 'not-found',
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule),
    canActivate: []
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
