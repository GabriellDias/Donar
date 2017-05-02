import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {LoginProvider} from "../../providers/login-provider";

import {Credencial} from "../../models/credencial";

import {SignUpUser} from "../sign-up-user/signup-user";

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})

export class SignUp {

  credencial: Credencial;
  signUpForm: FormGroup;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider, public fb: FormBuilder){
    this.initialize();
  }

  ionViewDidLoad(){
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(SignUpUser)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.credencial = new Credencial();
    this.signUpForm = this.fb.group({
      'email': ['', Validators.required],
      'cEmail': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'cPassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  SignUp(){
    this.loginProvider.signup(this.credencial);
  }
}
