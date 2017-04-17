import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Perg3} from "../perg3/perg3";

@Component({
  selector: 'page-perg2',
  templateUrl: 'perg2.html',
})
export class Perg2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perg2');
  }
  
  pergunta3(){
    this.navCtrl.push(Perg3);
  }

}
