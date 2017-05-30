import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { DonationProvider } from "../../providers/donation-provider";

import { DonationModel } from "../../models/model-donation";

@Component({
  selector: 'page-donation-list',
  templateUrl: 'donation-list.html',
})
export class DonationList {

  donation: Array<DonationModel>;

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
        snapshot.array.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.donation = innerArray;
      })
    })
  }

  deleteDonation(donation: DonationModel){
    this.donationProvider.delete(donation).then(
      sucess => console.log('Doação Deletada!')
    )
    .catch(error => console.log('Não Foi Possível Excluir!'));
  }

}
