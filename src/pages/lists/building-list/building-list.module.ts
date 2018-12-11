import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BuildingListPage } from './building-list';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    BuildingListPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingListPage),
    PipesModule
  ],
  exports: [
    BuildingListPage
  ]
})
export class ListMasterPageModule { }
