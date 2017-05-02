import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { Perfil } from "../perfil/perfil";
import { Information } from "../information/information";
import {Campaign} from "../../models/campaign";
import {CampaignsAdd} from "../campaigns-add/campaigns-add";
import { Hemocentros} from "../hemocentros/hemocentros";

@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html',
})
export class Campaigns {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  acessEnd(){
    console.log("Av Marciano França, Nº4, Centro, Ouro verde de Goiás.");
  }

  acessTel(){
    console.log("06293342-1158");
  }

  acessSite(){
    console.log("www.hemocentroanapolis.com.br");
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  addCampaign(){
    this.navCtrl.push(CampaignsAdd, {'campaign' : new Campaign()})
  }
   hemocentros(){
    this.navCtrl.push(Hemocentros);
  }
}
