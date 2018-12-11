import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullSizeMapPage } from './full-size-map';

@NgModule({
  declarations: [
    FullSizeMapPage,
  ],
  imports: [
    IonicPageModule.forChild(FullSizeMapPage),
  ],
})
export class FullSizeMapPageModule {}
