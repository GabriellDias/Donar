import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";

import { User } from "../models/user";
import {LoginProvider} from "./login-provider";

@Injectable()
export class UserProvider {

  reference;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('user/'+ this.loginProvider.currentUser.uid);
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
  });
}

}
