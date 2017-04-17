import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Caddonate} from "../caddonate/caddonate";

@Component({
  selector: 'page-perg3',
  templateUrl: 'perg3.html',
})
export class Perg3 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perg3');
  }

  cadonate(){
    this.navCtrl.push(Caddonate);
  }

}
