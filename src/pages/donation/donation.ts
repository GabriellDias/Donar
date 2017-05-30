import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {Information} from "../information/information";
import {Perfil} from "../perfil/perfil";
import { Hemocentros} from "../hemocentros/hemocentros";
import {DonationAdd} from "../donation-add/donation-add";
import {CampaignsList} from "../campaigns-list/campaigns-list";

@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class Donation {

  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  acessCad(){
    this.navCtrl.push(DonationAdd);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignsList);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

}
