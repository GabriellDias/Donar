import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import { Credencial } from "../../models/credencial";
import {Perfil} from "../perfil/perfil";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  credencial: Credencial;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider){
    this.initialize();
  }

  ionViewDidLoad(){
    state => this.navCtrl.setRoot(Perfil);
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => console.log(state)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.credencial = new Credencial();
  }

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
