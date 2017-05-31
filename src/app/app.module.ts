import { AdMob } from "@ionic-native/admob";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Network } from "@ionic-native/network";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { SocialSharing } from "@ionic-native/social-sharing";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CampaignListItem } from "../components/campaign-list-item/campaign-list-item";
import { DonationListItem } from "../components/donation-list-item/donation-list-item";
import { ExamListItem } from "../components/exam-list-item/exam-list-item";
import { HemocentrosListItem } from "../components/hemocentros-list-item/hemocentros-list-item";

import { CampaignProvider } from "../providers/campaign-provider";
import { DonationProvider } from "../providers/donation-provider";
import { ExamsProvider } from "../providers/exams-provider";
import firebase from "firebase";
import { LoginProvider } from "../providers/login-provider";
import { PasswordProvider } from "../providers/password-provider";
import { UserProvider } from "../providers/user-provider";

import { About } from "../pages/about/about";
import { CampaignsList } from "../pages/campaigns-list/campaigns-list";
import { Contacts } from "../pages/contacts/contacts";
import { DonationAdd } from "../pages/donation-add/donation-add";
import { DonationList } from "../pages/donation-list/donation-list";
import { ExamAdd } from "../pages/exam-add/exam-add";
import { ExamList } from "../pages/exam-list/exam-list";
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
    CampaignsList,
    CampaignListItem,
    Contacts,
    DonationAdd,
    DonationList,
    DonationListItem,
    ExamAdd,
    ExamList,
    ExamListItem,
    Help,
    Hemocentros,
    HemocentrosList,
    HemocentrosListItem,
    HomePage,
    Information,
    Login,
    Logout,
    MyApp,
    Perfil,
    ResetPassword,
    SignUp,
    SignUpUser
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    About,
    CampaignsList,
    CampaignListItem,
    Contacts,
    DonationAdd,
    DonationList,
    DonationListItem,
    ExamAdd,
    ExamList,
    ExamListItem,
    Help,
    Hemocentros,
    HemocentrosList,
    HemocentrosListItem,
    HomePage,
    Information,
    Login,
    Logout,
    MyApp,
    Perfil,
    ResetPassword,
    SignUp,
    SignUpUser
  ],
  providers: [
    AdMob,
    CampaignProvider,
    DonationProvider,
    ExamsProvider,
    Facebook,
    LoginProvider,
    Network,
    PasswordProvider,
    ScreenOrientation,
    SocialSharing,
    SplashScreen,
    StatusBar,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule{
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
