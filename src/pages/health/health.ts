import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {Information} from "../information/information";
import {Cadexam} from "../cadexam/cadexam";
import {Perfil} from "../perfil/perfil";
import { Campaigns } from "../campaigns/campaigns";
import { BloodCenters} from "../blood-centers/blood-centers";

@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class Health {

  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  cadexam(){
    this.navCtrl.push(Cadexam);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

  BloodCenters(){
    this.navCtrl.setRoot(BloodCenters);
  }

}
