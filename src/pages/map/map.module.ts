import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(MapPage),
  ],
})
export class MapPageModule {}
