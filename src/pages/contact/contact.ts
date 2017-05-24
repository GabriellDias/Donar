import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {Hemocentros} from "../hemocentros/hemocentros";
import {Campaigns} from "../campaigns/campaigns";
import {Information} from "../information/information";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }

  perfil(){
    this.navCtrl.setRoot(Perfil);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

}
