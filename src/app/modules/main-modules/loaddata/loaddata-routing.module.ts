import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaddataComponent } from "./loaddata.component";

const routes: Routes = [
  {
    path: '',
    component: LoaddataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
 
],
  exports: [RouterModule]
})
export class LoadDataRoutingModule { }
