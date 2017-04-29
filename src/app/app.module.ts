import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';

import firebase from "firebase";
import {LoginProvider} from "../providers/login-provider";
import {PasswordProvider} from "../providers/password-provider";
import {UserProvider} from "../providers/user-provider";

import { Caddonate } from "../pages/caddonate/caddonate";
import { Cadexam } from "../pages/cadexam/cadexam";
import { Donation } from "../pages/donation/donation";
import { Health } from "../pages/health/health";
import { HomePage } from '../pages/home/home';
import { Information } from "../pages/information/information";
import { Login } from "../pages/login/login";
import { MyApp } from './app.component';
import { Perfil } from "../pages/perfil/perfil";
import { Perg1 } from "../pages/perg1/perg1";
import { Perg2 } from "../pages/perg2/perg2";
import { Perg3 } from "../pages/perg3/perg3";
import { ResetPassword } from "../pages/reset-password/reset-password";
import { SignUp } from "../pages/sign-up/sign-up";
import { Campaigns } from "../pages/campaigns/campaigns";

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
    Caddonate,
    Cadexam,
    Donation,
    Health,
    HomePage,
    Information,
    Login,
    MyApp,
    Perfil,
    Perg1,
    Perg2,
    Perg3,
    ResetPassword,
    SignUp,
    Campaigns
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Caddonate,
    Cadexam,
    Donation,
    Health,
    HomePage,
    Information,
    Login,
    MyApp,
    Perfil,
    Perg1,
    Perg2,
    Perg3,
    ResetPassword,
    SignUp,
    Campaigns
  ],
  providers: [
    LoginProvider,
    PasswordProvider,
    UserProvider,
    SplashScreen,
    StatusBar,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
