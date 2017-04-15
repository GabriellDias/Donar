import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import firebase from "firebase";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Login} from "../pages/login/login";
import { SignUp } from "../pages/sign-up/sign-up"
import {LoginProvider} from "../providers/login-provider";
import {Health} from "../pages/health/health";
import {Donation} from "../pages/donation/donation";
import {Perfil} from "../pages/perfil/perfil";
import {Caddonate} from "../pages/caddonate/caddonate";

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
    MyApp,
    HomePage,
    Login,
    SignUp,
    Health,
    Donation,
    Perfil,
    Caddonate
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    SignUp,
    Health,
    Donation,
    Perfil,
    Caddonate
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
