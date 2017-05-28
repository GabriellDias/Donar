import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import {LoginProvider} from "../providers/login-provider";
import {DonationModel} from "../models/model-donation";

@Injectable()
export class DonationProvider {

  reference;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/donation/'+ this.loginProvider.currentUser.uid);
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

  delete(donation: DonationModel):any{
    return this.reference.child(donation.id).remove();
  }

}
