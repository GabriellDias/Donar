import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

import {Perfil} from "../perfil/perfil";
import {Login} from "../login/login";
import {SignUp} from "../sign-up/sign-up";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  userProfile: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider, public facebook: Facebook) {}

ionViewDidLoad(){
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(Perfil)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  btnLogin(){
    this.navCtrl.push(Login);
  }

  btnSignUp(){
    this.navCtrl.push(SignUp);
  }

/*
  btnFbLogin(): void {
    this.facebook.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.navCtrl.setRoot(Perfil);
          this.userProfile = success;
        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
      });

    }).catch((error) => { console.log(error) });
  }
*/

  btnFbLogin(){
    this.loginProvider.loginWithFacebook();
  }

}
