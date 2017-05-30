import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {BloodCenters} from "../blood-centers/blood-centers";
import {Campaigns} from "../campaigns/campaigns";
import {Information} from "../information/information";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class Help {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Help');
  }

  perfil(){
    this.navCtrl.setRoot(Perfil);
  }

  BloodCenters(){
    this.navCtrl.setRoot(BloodCenters);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }
}
