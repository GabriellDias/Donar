import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class Logout {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {
  }

  ionViewDidLoad(){
    this.loginProvider.logout(),
    this.navCtrl.setRoot(HomePage)
  }

}
