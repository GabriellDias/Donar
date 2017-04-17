import {EventEmitter, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";

import { ResetPass } from "../models/resetPass";

@Injectable()
export class PasswordProvider {

  SucessEventEmitter: EventEmitter<any>;
  ErrorEventEmitter: EventEmitter<any>;

  constructor(public http: Http) {}

  resetPassword(resetPass: ResetPass){
    firebase.auth().sendPasswordResetEmail(resetPass.email)
      .then(result => this.callbackSucess(result))
      .catch(error => this.callbackError(error))
  }

  private callbackSucess(result){
    this.SucessEventEmitter.emit(result.state);
  }

  private callbackError(error){
    this.ErrorEventEmitter.emit({code : error.code, message : error.message});
  }

}
