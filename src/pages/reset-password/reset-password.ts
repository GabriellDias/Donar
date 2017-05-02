import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ResetPass} from "../../models/resetPass";
import {PasswordProvider} from "../../providers/password-provider";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPassword {

  resetPass: ResetPass;
  resetPassForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public passwordProvider: PasswordProvider, public fb: FormBuilder){
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
    this.resetPassForm = this.fb.group({
      'email': ['', Validators.required]
    });
  }

  reset(){
    this.passwordProvider.resetPassword(this.resetPass);
  }

}
