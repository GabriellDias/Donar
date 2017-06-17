import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from "firebase";

import {LoginProvider} from "../providers/login-provider";

import {Exams} from "../models/exams";

@Injectable()
export class ExamProvider {

  reference;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref('/exams/'+ this.loginProvider.currentUser.uid);
  }

  save(exams: Exams){
    let id;
    if(exams.id != undefined){
      id = exams.id;
    } else{
      id = this.reference.push().key;
      exams.id = id;
    }
    this.reference.child(id).update(exams);
  }

  delete(exams: Exams){
    return this.reference.child(exams.id).remove();
  }

}
