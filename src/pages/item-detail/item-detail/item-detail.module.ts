import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemDetailPage } from './item-detail';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(ItemDetailPage),
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
