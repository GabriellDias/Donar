import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import { LoginProvider } from "../providers/login-provider";

import { Place } from '../models/place';

@Injectable()
export class PlaceProvider {

  reference;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/place/' + this.loginProvider.currentUser.uid);
  }

  save(place: Place){
    let id;
    if(place.id != undefined){
      id = place.id;
    }else{
      id = this.reference.push().key;
      place.id = id;
    }
    this.reference.child(id).update(place);
  }

  delete(place: Place){
    return this.reference.child(place.id).remove();
  }

}
