import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Login} from "../login/login";
import {SignUp} from "../sign-up/sign-up";
import {LoginProvider} from "../../providers/login-provider";
import {Credencial} from "../../models/credencial";
import {Perfil} from "../perfil/perfil";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  credencial: Credencial;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {}

  ionViewDidLoad(){
    state => this.navCtrl.setRoot(Perfil);
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => console.log(state)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  btnLogin(){
    this.navCtrl.push(Login);
  }

  btnSignUp(){
    this.navCtrl.push(SignUp);
  }

  btnFbLogin(){
    this.loginProvider.loginWithFacebook();
  }

}
