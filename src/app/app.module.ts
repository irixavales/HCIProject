import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import * as Providers from '../providers';
import { MyApp } from './app.component';
import {IonicImageViewerModule} from "ionic-img-viewer";
import {CategoryFilterPipe} from "../pipes/category-filter/category-filter";



@NgModule({
  declarations: [
    MyApp,
    // CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Providers.TrolleysProvider,
    Providers.EventsProvider,
    Providers.BuildingsProvider,
    Providers.ServicesProvider,
    Providers.SocialPlacesProvider,
    SplashScreen,
    StatusBar,
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
