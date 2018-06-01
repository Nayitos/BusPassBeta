import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuienesPage } from '../pages/quienes/quienes';
import { ContactoPage } from '../pages/contacto/contacto';
import { PerfilPage } from '../pages/perfil/perfil';
import {LoginPage} from '../pages/login/login';
import {SingUpPage} from '../pages/sing-up/sing-up';
import {MibusPage} from '../pages/mibus/mibus';
 
// Map 
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuienesPage,
    ContactoPage,
    PerfilPage,
    LoginPage,
    SingUpPage,
    MibusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA39f1KpAPCrApjaVMx-cwAZ9NNZuiwBkM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuienesPage,
    ContactoPage,
    PerfilPage,
    LoginPage,
    SingUpPage,
    MibusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
