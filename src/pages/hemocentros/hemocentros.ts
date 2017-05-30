import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {Information} from "../information/information";
import {CampaignsList} from "../campaigns-list/campaigns-list";

@Component({
  selector: 'page-hemocentros',
  templateUrl: 'hemocentros.html',
})
export class Hemocentros {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignsList);
  }

}
