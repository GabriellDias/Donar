import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-hemocentros-list',
  templateUrl: 'hemocentros-list.html',
})
export class HemocentrosList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HemocentrosList');
  }

}
