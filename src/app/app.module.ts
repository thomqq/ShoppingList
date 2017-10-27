import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Config, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListsPage } from '../pages/lists/lists';
import { ShoppingListService } from '../services/ShoppingListService';
import { ConfigPage } from "../pages/config/config";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListsPage,
    ListPage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListsPage,
    ListPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService
  ]
})
export class AppModule {}
