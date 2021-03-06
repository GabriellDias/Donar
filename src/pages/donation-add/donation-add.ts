import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';

import { DonationProvider } from "../../providers/donation-provider";

import { Donation } from "../../models/donation";

import { CampaignsList } from "../campaigns-list/campaigns-list";
import { DonationList } from "../donation-list/donation-list";
import { Hemocentros } from "../hemocentros/hemocentros";
import { Information } from "../information/information";
import { Perfil } from "../perfil/perfil";

@Component({
  selector: 'page-donation-add',
  templateUrl: 'donation-add.html',
})
export class DonationAdd {

  donation: Donation;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public loadCtrl: LoadingController, public donationProvider: DonationProvider) {
      this.initialize();
    }

  private initialize(){
    this.donation = this.navParams.get('donation');
    if(!this.donation){
      this.donation = new Donation();
    }
  }

  saveDonation(){
    this.donationProvider.save(this.donation);
    this.viewCtrl.dismiss();
    this.loadCad();
  }

  loadCad(){
    let loader = this.loadCtrl.create({
      content: "Salvando...",
      dismissOnPageChange: true
    });
    loader.present();
  }

  backPage(){
    this.navCtrl.setRoot(DonationList);
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
