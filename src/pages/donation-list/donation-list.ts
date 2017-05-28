import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {DonationModel} from "../../models/model-donation";
import {DonationProvider} from "../../providers/donation-provider";

@Component({
  selector: 'page-donation-list',
  templateUrl: 'donation-list.html',
})
export class DonationList {

  donates: Array<DonationModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public donationProvider: DonationProvider, public ngZone: NgZone, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

    this.donationProvider.reference.on('child_removed', (snapshot) => {
      let donationRemoved = snapshot.val();
      this.toastCtrl.create({
        message: 'Doação Removida',
        duration: 2000
      }).present();
    })

    this.donationProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.array.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.donates = innerArray;
      })
    })
  }

  deleteDonate(donation: DonationModel){
    this.donationProvider.delete(donation).then(
      sucess => console.log('Doação Deletada')
    )

    .catch(error => console.log('Não Foi Possível Excluir'));
  }

}
