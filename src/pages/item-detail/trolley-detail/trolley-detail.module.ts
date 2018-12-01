import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrolleyDetailPage } from './trolley-detail';

@NgModule({
  declarations: [
    TrolleyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TrolleyDetailPage),
  ],
})
export class TrolleyDetailPageModule {}
