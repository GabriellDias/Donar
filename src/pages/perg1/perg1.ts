import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Perg2} from "../perg2/perg2";

@Component({
  selector: 'page-perg1',
  templateUrl: 'perg1.html',
})
export class Perg1 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perg1');
  }

  pergunta2(){
    this.navCtrl.push(Perg2);
  }

}
