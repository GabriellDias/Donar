import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import {LoginProvider} from "../providers/login-provider";
import {DonationModel} from "../models/model-donation";

@Injectable()
export class Donate {

  reference;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/donation/');
  }

  save(donation: DonationModel){
    let id;

    if(donation.id != undefined){
      id = donation.id;
    } else{
      id = this.reference.push().key;
      donation.id = id;
    }
    this.reference.child(id).update(donation);
  }

}
