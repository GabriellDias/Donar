import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';

import {ResetPass} from "../../models/resetPass";
import {PasswordProvider} from "../../providers/password-provider";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPassword {

  resetPass: ResetPass;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public passwordProvider: PasswordProvider, public loadingCtrl: LoadingController){
    this.initialize();
  }

  ionViewDidLoad(){
    this.passwordProvider.SucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(HomePage)
    )
    this.passwordProvider.ErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.resetPass = new ResetPass();
  }

  reset(){
    this.passwordProvider.resetPassword(this.resetPass);
  }

}
