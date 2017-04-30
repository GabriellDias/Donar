import {EventEmitter, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";

import { User } from "../models/user";

@Injectable()
export class UserProvider {

  SucessEventEmitter: EventEmitter<any>;
  ErrorEventEmitter: EventEmitter<any>;

  constructor(public http: Http) {}

  saveUserData(user: User) {
  firebase.database().ref('user/'+ user.uid).set({
    	name : user.name,
    	sex : user.sex,
    	estate : user.state,
    	city : user.city,
    	bloodGroup : user.bloodGroup,
    	isDonor : user.donor,
    	rhFactor : user.rhFactor,
    	lastDonation : user.lastDonation
  });
}

 private callbackSucess(result){
    this.SucessEventEmitter.emit(result.state);
  }

  private callbackError(error){
    this.ErrorEventEmitter.emit({code : error.code, message : error.message});
  }


}
