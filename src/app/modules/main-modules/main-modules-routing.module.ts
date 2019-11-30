import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModulesComponent } from "./main-modules.component";

const routes: Routes = [
  {
    path: '',
    component: MainModulesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        //loadChildren: './dashboard/dashboard.module#DashboardModule',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: []
      },
      {
        path: 'tables',
        loadChildren: () => import('./loaddata/loaddata.module').then(m => m.LoadDataModule),
        canActivate: []
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModulesRoutingModule { }
