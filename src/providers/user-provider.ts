import {EventEmitter, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";

import { User } from "../models/user";
import {LoginProvider} from "./login-provider";

@Injectable()
export class UserProvider {

  reference;
  loginSucessEventEmitter: EventEmitter<any>;
  loginErrorEventEmitter: EventEmitter<any>;
  logoutEventEmitter: EventEmitter<any>;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.loginSucessEventEmitter = new EventEmitter();
    this.loginErrorEventEmitter = new EventEmitter();
    this.logoutEventEmitter = new EventEmitter();

    this.initialize();

  }

  private initialize(){
    this.reference = firebase.database().ref('user/'+ this.loginProvider.currentUser.uid);
  }

  private callbackSucessLogin(response){
    this.loginSucessEventEmitter.emit(response.state);
  }

  private callbackErrorLogin(error){
    this.loginErrorEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial : error.credencial});
  }

  saveUserData(user: User) {
  this.reference.set({
    	name : user.name,
    	sex : user.sex,
    	estate : user.state,
    	city : user.city,
    	bloodGroup : user.bloodGroup,
    	isDonor : user.donor,
    	rhFactor : user.rhFactor,
    	lastDonation : user.lastDonation
  }).then(result => this.callbackSucessLogin(result))
    .catch(error => this.callbackErrorLogin(error))
}

}
