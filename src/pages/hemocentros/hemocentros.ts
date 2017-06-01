import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {Information} from "../information/information";
import {CampaignsList} from "../campaigns-list/campaigns-list";

@Component({
  selector: 'page-hemocentros',
  templateUrl: 'hemocentros.html',
})
export class Hemocentros {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  home() {
    this.navCtrl.setRoot(Perfil);
  }

  information() {
    this.navCtrl.setRoot(Information);
  }

  campaigns() {
    this.navCtrl.setRoot(CampaignsList);
  }

  endInst() {
    let alert = this.alertCtrl.create({
      title: 'Instituto Onco-Hematológico de Anápolis',
      subTitle: 'Rua Washington de Carvalho, 155 - St. Central, Anápolis - GO',
      buttons: ['Voltar']
    })

    alert.present();
  }

  endHosp() {
    let alert = this.alertCtrl.create({
      title: 'Hospital de Urgências de Anápolis',
      subTitle: 'Av. Brasil Norte, 3631 - Cidade Universitária, Anápolis - GO',
      buttons: ['Voltar']
    })

    alert.present();
  }
}
