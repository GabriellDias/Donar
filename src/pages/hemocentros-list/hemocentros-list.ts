import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {Information} from "../information/information";
import {Campaigns} from "../campaigns/campaigns";


@Component({
  selector: 'page-hemocentros-list',
  templateUrl: 'hemocentros-list.html',
})
export class HemocentrosList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

}
