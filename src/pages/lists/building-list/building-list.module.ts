import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BuildingListPage } from './building-list';

@NgModule({
  declarations: [
    BuildingListPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingListPage),
    TranslateModule.forChild()
  ],
  exports: [
    BuildingListPage
  ]
})
export class ListMasterPageModule { }
