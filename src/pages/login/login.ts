import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";

import { Credencial } from "../../models/credencial";
import {HomePage} from "../home/home";
import {Perfil} from "../perfil/perfil";
import {ResetPassword} from "../reset-password/reset-password";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  credencial: Credencial;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider, public loadingCtrl: LoadingController){
    this.initialize();
  }

  ionViewDidLoad(){
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(Perfil)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.credencial = new Credencial();
  }

  btnDonarLogin(form){
    this.loginProvider.loginWithCredencial(this.credencial);
    this.loading();
  }

  log(form){
    console.log(form);
  }

  loading() {
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      duration: 500
    });
    loader.present();
  }

  resetPassword(){
    this.navCtrl.push(ResetPassword);
  }

}
