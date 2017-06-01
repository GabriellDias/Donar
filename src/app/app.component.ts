import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { Network } from "@ionic-native/network";

import { LoginProvider } from "../providers/login-provider";

import { About } from "../pages/about/about";
import { Contacts } from "../pages/contacts/contacts";
import { Help } from "../pages/help/help";
import { HomePage } from '../pages/home/home';
import { Logout } from "../pages/logout/logout";
import { SignUpUser } from "../pages/sign-up-user/signup-user";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public loginProvider: LoginProvider, public screenOrientation: ScreenOrientation,
            public network: Network, public toastCtrl: ToastController) {

    this.initializeApp();

    this.pages = [
      /*{ title: 'Alterar Dados', component: SignUpUser},
      { title: 'Ajuda', component: Help},*/
      { title: 'Contato', component: Contacts },
      { title: 'Sobre', component: About },
      { title: 'Sair', component: Logout},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.toastCtrl.create({
        message: 'Perda de Conexão com à Internet!',
        showCloseButton: true,
        closeButtonText: 'Ok',
        position: 'middle'
      }).present();
    });
}

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
