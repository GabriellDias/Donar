import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import {LoginProvider} from "../providers/login-provider";
import {Exams} from "../models/exams";

@Injectable()
export class ExamsProvider {

  reference;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    console.log('Hello ExamsProvider Provider');
  }

  private initialize(){
    this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/exams/');
  }

  save(exams: Exams){
    let id;
    if(exams.id != undefined){
      id = exams.id;
    }else{
      id = this.reference.push().key;
      exams.id = id;
    }
    this.reference.child(id).update(exams);
  }

}
