import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import { Credencial } from "../../models/credencial";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  credencial: Credencial;
  //credencial2: {email:{},password:{}};
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {}

  btnDonarLogin(){
    this.loginProvider.loginWithCredencial(this.credencial);
  }

  logout(){
    this.loginProvider.logout();
  }

  btnBack(){
    this.navCtrl.pop();
  }

}
