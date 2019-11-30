import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MainModulesRoutingModule } from './main-modules-routing.module';
import { MainModulesComponent } from './main-modules.component';

import {FooterComponent} from '../../core/layout/footer/footer.component';
import {SideBarComponent} from '../../core/layout/side-bar/side-bar.component'
import {NavigationBarComponent  } from "../../core/layout/navigation-bar/navigation-bar.component";

@NgModule({
  declarations: [
    MainModulesComponent,
    FooterComponent,
    SideBarComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    MainModulesRoutingModule,
    TranslateModule
  ]
})
export class MainModulesModule { }
