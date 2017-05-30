import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {BloodCenters} from "../blood-centers/blood-centers";
import {Campaigns} from "../campaigns/campaigns";
import {Information} from "../information/information";

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class Contacts {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  erico(){
    let alert = this.alertCtrl.create({
      title: 'Erico Junior',
      subTitle: 'ericojunior.morais@hotmail.com',
      buttons: ['Voltar']
    })

    alert.present();
  }

  gabriel(){
    let alert = this.alertCtrl.create({
      title: 'Gabriel Dias',
      subTitle: 'gabrielldias_12@hotmail.com',
      buttons: ['Voltar']
    })

    alert.present();
  }

  josimar(){
    let alert = this.alertCtrl.create({
      title: 'Josimar Cândido',
      subTitle: 'josimar.infotecnico@gmail.com',
      buttons: ['Voltar']
    })

    alert.present();
  }

  lucas(){
    let alert = this.alertCtrl.create({
      title: 'Lucas Andrade',
      subTitle: 'lucas.tecnico.dev@gmail.com',
      buttons: ['Voltar']
    })

    alert.present();
  }

  matheus(){
    let alert = this.alertCtrl.create({
      title: 'Matheus Lima',
      subTitle: 'matheuslima_123@hotmail.com',
      buttons: ['Voltar']
    })

    alert.present();
  }

  samuel(){
    let alert = this.alertCtrl.create({
      title: 'Samuel de Souza',
      subTitle: 'samdev@outlook.com.br',
      buttons: ['Voltar']
    })

    alert.present();
  }

  perfil(){
    this.navCtrl.setRoot(Perfil);
  }

  BloodCenters(){
    this.navCtrl.setRoot(BloodCenters);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }


}
