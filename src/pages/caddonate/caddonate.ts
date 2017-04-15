import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-caddonate',
  templateUrl: 'caddonate.html',
})
export class Caddonate {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Caddonate');
  }

}
