import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {Donate} from "../../providers/donate";
import {DonationModel} from "../../models/model-donation";

@Component({
  selector: 'page-donation-list',
  templateUrl: 'donation-list.html',
})
export class DonationList {

  donates: Array<DonationModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public donateProvider: Donate, public ngZone: NgZone, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
    this.donateProvider.reference.on('child_removed', (snapshot) => {
      let donationRemoved = snapshot.val();
      this.toastCtrl.create({
        message: 'Doação Removida',
        duration: 2000
      }).present();
    })

    this.donateProvider.reference.on('value', (snapshot) => {
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

  deleteDonate(donate: DonationModel){
    this.donateProvider.delete(donate).then(
      sucess => console.log('Doação Deletada')
    )

    .catch(error => console.log('Não foi possivel excluir'));
  }

}
