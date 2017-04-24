import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {Information} from "../information/information";
import {Cadexam} from "../cadexam/cadexam";
import {Perfil} from "../perfil/perfil";
import { Campaigns } from "../campaigns/campaigns";

@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class Health {

  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.pop(Perfil);
  }

  information(){
    this.navCtrl.push(Information);
  }

  cadexam(){
    this.navCtrl.push(Cadexam);
  }

  campaigns(){
    this.navCtrl.push(Campaigns);
  }

}
