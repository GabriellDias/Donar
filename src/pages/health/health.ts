import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {Information} from "../information/information";
import {Cadexam} from "../cadexam/cadexam";

@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class Health {

  constructor(public navCtrl: NavController) {
  }

  information(){
    this.navCtrl.push(Information);
  }

  cadexam(){
    this.navCtrl.push(Cadexam);
  }

}
