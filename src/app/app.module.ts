import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import {CampaignListItem} from "../components/campaign-list-item/campaign-list-item";

import firebase from "firebase";
import {LoginProvider} from "../providers/login-provider";
import {PasswordProvider} from "../providers/password-provider";
import {UserProvider} from "../providers/user-provider";
import {CampaignProvider} from "../providers/campaign-provider";
import {ListProvider} from "../providers/list-provider";

import { About } from "../pages/about/about";
import { Caddonate } from "../pages/caddonate/caddonate";
import { Cadexam } from "../pages/cadexam/cadexam";
import { Campaigns } from "../pages/campaigns/campaigns";
import { CampaignsAdd } from "../pages/campaigns-add/campaigns-add";
import { CampaignsList } from "../pages/campaigns-list/campaigns-list";
import { Donation } from "../pages/donation/donation";
import { Health } from "../pages/health/health";
import { HomePage } from '../pages/home/home';
import { Information } from "../pages/information/information";
import { Login } from "../pages/login/login";
import { MyApp } from './app.component';
import { Perfil } from "../pages/perfil/perfil";
import { ResetPassword } from "../pages/reset-password/reset-password";
import { SignUp } from "../pages/sign-up/sign-up";
import { SignUpUser } from "../pages/sign-up-user/signup-user";

const firebaseConfig = {
  apiKey: "AIzaSyAaV8rJnn-CISeGW8qcUGzRLfcrsSaOkJc",
  authDomain: "donar-b5d53.firebaseapp.com",
  databaseURL: "https://donar-b5d53.firebaseio.com",
  projectId: "donar-b5d53",
  storageBucket: "donar-b5d53.appspot.com",
  messagingSenderId: "821855917794"
};

@NgModule({
  declarations: [
    About,
    Caddonate,
    Cadexam,
    Donation,
    Health,
    HomePage,
    Information,
    Login,
    MyApp,
    Perfil,
    ResetPassword,
    SignUp,
    SignUpUser,
    Campaigns,
    CampaignsAdd,
    CampaignsList,
    CampaignListItem
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    About,
    Caddonate,
    Cadexam,
    Donation,
    Health,
    HomePage,
    Information,
    Login,
    MyApp,
    Perfil,
    ResetPassword,
    SignUp,
    SignUpUser,
    Campaigns,
    CampaignsAdd,
    CampaignsList,
    CampaignListItem
  ],
  providers: [
    LoginProvider,
    PasswordProvider,
    UserProvider,
    CampaignProvider,
    ListProvider,
    SplashScreen,
    StatusBar,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule{
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
