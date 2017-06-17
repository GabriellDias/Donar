import {EventEmitter, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import {LoginProvider} from "./login-provider";

import { User } from "../models/user";

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
    this.reference = firebase.database().ref('/user/' + this.loginProvider.currentUser.uid);
  }

  private callbackSucessLogin(response){
    this.loginSucessEventEmitter.emit(response.state);
  }

  private callbackErrorLogin(error){
    this.loginErrorEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial : error.credencial});
  }

  saveUserData(user: User) {
    let id;
    if (user.id != undefined) {
      id = user.id;
    } else {
      id = this.reference.push().key;
      user.id = id;
    }
    this.reference.child(id).update(user)
      .then(result => this.callbackSucessLogin(result))
      .catch(error => this.callbackErrorLogin(error));
  }

}
