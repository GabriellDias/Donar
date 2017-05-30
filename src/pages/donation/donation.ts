import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {Information} from "../information/information";
import {Perfil} from "../perfil/perfil";
import {Caddonate} from "../caddonate/caddonate";
import { Campaigns } from "../campaigns/campaigns";
import { BloodCenters} from "../blood-centers/blood-centers";
import {DonationList} from "../donation-list/donation-list";

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
    this.navCtrl.push(Caddonate);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

  BloodCenters(){
    this.navCtrl.setRoot(BloodCenters);
  }

}
