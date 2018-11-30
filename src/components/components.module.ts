import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {IonicModule} from "ionic-angular";

import { ListComponent } from './list/list';


@NgModule({
	declarations: [ListComponent],
	imports: [IonicModule],
	exports: [ListComponent],
  // this needs to be added to be able to use custom components
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
