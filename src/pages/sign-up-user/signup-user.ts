import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {UserProvider} from "../../providers/user-provider";

import {User} from "../../models/user";

@Component({
  selector: 'page-sign-up-user',
  templateUrl: 'sign-up-user.html',
})
export class SignUpUser {

  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
    this.user = new User();
  }

  SignUp(){
    this.userProvider.saveUserData(this.user);
  }

}
