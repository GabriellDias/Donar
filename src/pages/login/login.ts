import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Network } from "@ionic-native/network";

import { LoginProvider } from "../../providers/login-provider";

import { Credencial } from "../../models/credencial";
import { Perfil } from "../perfil/perfil";
import { ResetPassword } from "../reset-password/reset-password";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {

  credencial: Credencial;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,
              public loginProvider: LoginProvider, public loadingCtrl: LoadingController, public network: Network,
              public toastCtrl: ToastController){
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
    let connectSubscription = this.network.type;

        if (connectSubscription === "none") {
          this.toastCtrl.create({
            message: 'Sem Acesso à Internet',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'middle'
          }).present();
          console.log("Sem Acesso à Internet");
        }else
          if(connectSubscription === "wifi" || connectSubscription === "cellular"){
            this.loginProvider.loginWithCredencial(this.credencial);
            this.loading();
            console.log("Internet PORRA!");
          }
  }

  loading() {
    let loader = this.loadingCtrl.create({
      spinner: 'crescent',
      dismissOnPageChange: true
    });
    loader.present();
  }

  resetPassword(){
    this.navCtrl.push(ResetPassword);
  }

}
