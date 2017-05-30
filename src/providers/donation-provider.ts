import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import {LoginProvider} from "../providers/login-provider";
import {Donation} from "../models/donation";

@Injectable()
export class DonationProvider {

  reference;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/donation/'+ this.loginProvider.currentUser.uid);
  }

  save(donation: Donation){
    let id;

    if(donation.id != undefined){
      id = donation.id;
    } else{
      id = this.reference.push().key;
      donation.id = id;
    }
    this.reference.child(id).update(donation);
  }

  delete(donation: Donation):any{
    return this.reference.child(donation.id).remove();
  }

}
