import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrolleyListPage } from './trolley-list';

@NgModule({
  declarations: [
    TrolleyListPage,
  ],
  imports: [
    IonicPageModule.forChild(TrolleyListPage),
  ],
})
export class TrolleyListPageModule {}
