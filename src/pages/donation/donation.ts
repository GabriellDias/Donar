import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {Information} from "../information/information";
import {Perg1} from "../perg1/perg1";
import {Perfil} from "../perfil/perfil";
import { Campaigns } from "../campaigns/campaigns";

@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class Donation {

  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.pop(Perfil);
  }

  acessCad(){
    console.log("teste");
    this.navCtrl.push(Perg1);
  }

  information(){
    this.navCtrl.push(Information);
  }

  campaigns(){
    this.navCtrl.push(Campaigns);
  }

}
