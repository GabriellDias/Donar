import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';

import {Perfil} from "../perfil/perfil";
import {Information } from "../information/information";
import {Hemocentros} from "../hemocentros/hemocentros";

@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html',
})
export class Campaigns {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

  }

  acessEnd(){
    let alert = this.alertCtrl.create({
      title: 'Endereço',
      subTitle: 'Av. Goiás, Nº210, Centro, Anápolis de Goiás.',
      buttons: ['OK']
    })
    alert.present();
  }

  acessTel(){
    let alert = this.alertCtrl.create({
      title: 'Telefone',
      subTitle: '(062) 99342-1158',
      buttons: ['OK']
    })
    alert.present();
  }

  acessSite(){
    let alert = this.alertCtrl.create({
      title: 'Site',
      subTitle: 'www.hemocentroanapolis.com.br',
      buttons: ['OK']
    })
    alert.present();
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }
}
