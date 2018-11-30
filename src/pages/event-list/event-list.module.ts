import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventListPage } from './event-list';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    EventListPage,
  ],
  imports: [
    IonicPageModule.forChild(EventListPage),
    ComponentsModule
  ],
})
export class EventListPageModule {}
