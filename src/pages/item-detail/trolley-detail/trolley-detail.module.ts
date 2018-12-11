import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrolleyDetailPage } from './trolley-detail';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    TrolleyDetailPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(TrolleyDetailPage),
  ],
})
export class TrolleyDetailPageModule {}
