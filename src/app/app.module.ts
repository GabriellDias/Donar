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
import {Donate} from "../providers/donate";
import {ExamsProvider} from "../providers/exams-provider";

import { About } from "../pages/about/about";
import { Caddonate } from "../pages/caddonate/caddonate";
import { Cadexam } from "../pages/cadexam/cadexam";
import { Campaigns } from "../pages/campaigns/campaigns";
import { CampaignsAdd } from "../pages/campaigns-add/campaigns-add";
import { CampaignsList } from "../pages/campaigns-list/campaigns-list";
import { Contacts } from "../pages/contacts/contacts";
import { Donation } from "../pages/donation/donation";
import { Health } from "../pages/health/health";
import { Help } from "../pages/help/help";
import { Hemocentros } from "../pages/hemocentros/hemocentros";
import { HemocentrosList } from "../pages/hemocentros-list/hemocentros-list";
import { HomePage } from '../pages/home/home';
import { Information } from "../pages/information/information";
import { Login } from "../pages/login/login";
import { Logout } from "../pages/logout/logout";
import { MyApp } from './app.component';
import { Perfil } from "../pages/perfil/perfil";
import { ResetPassword } from "../pages/reset-password/reset-password";
import { SignUp } from "../pages/sign-up/sign-up";
import { SignUpUser } from "../pages/sign-up-user/signup-user";
import {Update} from "../pages/update/update";
import {DonationList} from "../pages/donation-list/donation-list";

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
    Campaigns,
    CampaignsAdd,
    CampaignsList,
    CampaignListItem,
    Contacts,
    Donation,
    DonationList,
    Health,
    Help,
    Hemocentros,
    HemocentrosList,
    HomePage,
    Information,
    Login,
    Logout,
    MyApp,
    Perfil,
    ResetPassword,
    SignUp,
    SignUpUser,
    Update
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
    Campaigns,
    CampaignsAdd,
    CampaignsList,
    CampaignListItem,
    Contacts,
    Donation,
    DonationList,
    Health,
    Help,
    Hemocentros,
    HemocentrosList,
    HomePage,
    Information,
    Login,
    Logout,
    MyApp,
    Perfil,
    ResetPassword,
    SignUp,
    SignUpUser,
    Update
  ],
  providers: [
    CampaignProvider,
    Donate,
    ExamsProvider,
    ListProvider,
    LoginProvider,
    PasswordProvider,
    UserProvider,
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
