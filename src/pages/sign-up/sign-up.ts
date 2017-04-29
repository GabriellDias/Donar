import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Credencial} from "../../models/credencial";
import { User } from "../../models/user";
import {LoginProvider} from "../../providers/login-provider";
import {UserProvider} from "../../providers/user-provider";
import {Perfil} from "../perfil/perfil";

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})

export class SignUp {

  credencial: Credencial;
  user: User;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider, public userProvider: UserProvider){
    this.credencial = new Credencial();
    this.user = new User();
  }

  ionViewDidLoad(){
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(Perfil)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  SignUp(){
    this.loginProvider.signup(this.credencial);
    console.log(this.user.sex);
    this.user.uid = this.loginProvider.currentUser.uid;
    this.userProvider.saveUserData(this.user);
  }
}
