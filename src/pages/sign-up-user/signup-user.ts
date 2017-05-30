import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {UserProvider} from "../../providers/user-provider";
import {LoginProvider} from "../../providers/login-provider";

import {User} from "../../models/user";

@Component({
  selector: 'page-sign-up-user',
  templateUrl: 'sign-up-user.html',
})

export class SignUpUser {

  user: User;
  signUpUserForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, /*public loginProvider: LoginProvider,
              public loadCtrl: LoadingController, public userProvider: UserProvider,*/ public fb: FormBuilder){
               this.initialize();
  }

  /*ionViewDidLoad(){
    this.userProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(Perfil)
    )
    this.userProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }
*/
   private initialize(){
   this.user = new User();
   this.signUpUserForm = this.fb.group({
    'firstName': ['', Validators.required],
    'lastName': ['', Validators.required],
    'sex': ['', Validators.required],
    'state': ['', Validators.required],
    'city': ['', Validators.required],
    'donor': ['', Validators.required],
    'bloodGroup': ['', Validators.required],
    'rhFactor': ['', Validators.required],
    'lastDonation': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
   });
   }
/*
  SignUp(){
    this.userProvider.saveUserData(this.user);
    this.loadSend();
  }

  loadSend(){
    let loader = this.loadCtrl.create({
      content: "Entrando...",
      duration: 2000
    });
    loader.present();
  }
*/
}
