import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {LoginProvider} from "../../providers/login-provider";

import { Credencial } from "../../models/credencial";
import {Perfil} from "../perfil/perfil";
import {ResetPassword} from "../reset-password/reset-password";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  credencial: Credencial;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,
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
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  btnDonarLogin(form){
    this.loginProvider.loginWithCredencial(this.credencial);
    this.loading();
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
