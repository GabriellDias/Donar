import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { DonationProvider } from "../../providers/donation-provider";

import { Donation } from "../../models/donation";
import {DonationAdd} from "../donation-add/donation-add";
import {Perfil} from "../perfil/perfil";
import {Hemocentros} from "../hemocentros/hemocentros";
import {Information} from "../information/information";
import {CampaignsList} from "../campaigns-list/campaigns-list";

@Component({
  selector: 'page-donation-list',
  templateUrl: 'donation-list.html',
})
export class DonationList {

  donation: Array<Donation>;

  constructor(public navCtrl: NavController, public donationProvider: DonationProvider,
              public ngZone: NgZone, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.donationProvider.reference.on('child_removed', (snapshot) => {
      let donationRemoved = snapshot.val();
      this.toastCtrl.create({
        message: 'Doação Removida!',
        duration: 3000
      }).present();
    })

    this.donationProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.donation = innerArray;
      })
    })
  }

  updateDonation(donation: Donation){
    this.navCtrl.push(DonationAdd, {'donation' : donation});
  }

  insertDonation(){
    this.navCtrl.push(DonationAdd, {'donation': new Donation()});
  }

  deleteDonation(donation: Donation){
    this.donationProvider.delete(donation).then(
      sucess => console.log('Doação Deletada!')
    )
    .catch(error => console.log('Não Foi Possível Excluir!'));
  }

  perfil(){
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
