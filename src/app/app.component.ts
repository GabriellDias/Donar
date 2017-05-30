import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginProvider} from "../providers/login-provider";

import { About } from "../pages/about/about";
import { Contacts } from "../pages/contacts/contacts";
import { Help } from "../pages/help/help";
import { HomePage } from '../pages/home/home';
import { Logout } from "../pages/logout/logout";
import { Update } from "../pages/update/update";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public loginProvider: LoginProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Alterar Dados', component: Update},
      { title: 'Ajuda', component: Help},
      { title: 'Contato', component: Contacts },
      { title: 'Sobre', component: About },
      { title: 'Sair', component: Logout},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
