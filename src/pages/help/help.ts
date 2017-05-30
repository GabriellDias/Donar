import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {Hemocentros} from "../hemocentros/hemocentros";
import {Information} from "../information/information";
import {CampaignsList} from "../campaigns-list/campaigns-list";

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

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignsList);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }
}
