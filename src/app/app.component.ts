import { Component, ViewChild} from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Importante pages
import {QuienesPage} from'../pages/quienes/quienes';
import {ContactoPage} from '../pages/contacto/contacto';
import {PerfilPage} from '../pages/perfil/perfil';
import {LoginPage} from '../pages/login/login';
import {MibusPage} from '../pages/mibus/mibus';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild('NAV') nav: Nav;

  public rootPage : any;
  public pages: Array <{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = LoginPage;
    this.pages = [
      {titulo:'Inicio', component: LoginPage,icon:"ios-home-outline"},
      {titulo:'Pefil',  component: PerfilPage,icon:"ios-person-outline"},
      {titulo:'¿Quiénes Somos?', component:QuienesPage,icon:"ios-information-circle-outline"},
      {titulo:'Contacto', component: ContactoPage,icon:"ios-mail-outline"},
      {titulo:'Mi camión',component:MibusPage,icon:"ios-bus-outline"}
    ];
   
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


goToPage(page)
{
  this.nav.setRoot(page);
}


}

