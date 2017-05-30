import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import {Hemocentros} from "../hemocentros/hemocentros";
import {Information} from "../information/information";
import {CampaignsList} from "../campaigns-list/campaigns-list";

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

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignsList);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }


}
