import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import * as Providers from '../providers';
import { MyApp } from './app.component';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.

// don't need a translator
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateLoader),
    //     deps: [HttpClient]
    //   }
    // }),
    IonicModule.forRoot(MyApp),
    // IonicStorageModule.forRoot()
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
