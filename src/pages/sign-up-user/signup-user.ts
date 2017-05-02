import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {UserProvider} from "../../providers/user-provider";
import {LoginProvider} from "../../providers/login-provider";

import {User} from "../../models/user";

import {Perfil} from "../perfil/perfil";

@Component({
  selector: 'page-sign-up-user',
  templateUrl: 'sign-up-user.html',
})
export class SignUpUser {

  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider, public userProvider: UserProvider) {
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
    this.userProvider.saveUserData(this.user);
  }

}
