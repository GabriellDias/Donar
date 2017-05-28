import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {Hemocentros} from "../hemocentros/hemocentros";
import {Campaigns} from "../campaigns/campaigns";
import {Information} from "../information/information";

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class Contacts {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  perfil(){
    this.navCtrl.setRoot(Perfil);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  erico(){
    let alert = this.alertCtrl.create({
      title: 'Erico',
      buttons: ['OK']
    })

    alert.present();
  }

}
