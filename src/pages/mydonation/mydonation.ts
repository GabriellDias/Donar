import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'mydonation.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {

  }

  confirmMyDonate() {
    let confirm = this.alertCtrl.create({
      title: 'Donar',
      subTitle: 'Você ingeriu bebida alcolica nos ultimos 3 dias?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim');
          }
        }
      ]
    });
    confirm.present();
  }

}
