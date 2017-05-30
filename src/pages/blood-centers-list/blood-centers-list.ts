import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-blood-centers-list',
  templateUrl: 'blood-centers-list.html',
})
export class BloodCentersList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}

import {CampaignProvider} from "../../providers/campaign-provider";

import { Campaign } from "../../models/campaign";

@Component({
  selector: 'page-campaigns-list',
  templateUrl: 'campaigns-list.html',
})
export class CampaignsList {

  campaign: Array<Campaign>;

  constructor(public navCtrl: NavController, public campaignProvider: CampaignProvider,
              public ngZone: NgZone, public toastCtrl: ToastController) {}

  ionViewDidLoad(){

    /*
     * value = Escuta todas as alterações da referência
     * child_added - Ouvinte para quando um filho é adicionado
     * child_changed - Ouvinte para quando fllho for alterado
     * child_removed - Ouvinte para qunado filho for deletado
     * child_moved - Ouviente para acompanhar mudanças na prioridade de um filho
     */

    this.campaignProvider.reference.on('child_removed', (snapshot) => {
      let campaignRemoved = snapshot.val();
      this.toastCtrl.create({
        message: 'Campanha ' + campaignRemoved.title+ ' Removida!',
        duration: 3000
      }).present();
    })

    this.campaignProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.campaign = innerArray;
      })
    })
  }

  deleteCampaign(campaign: Campaign){
    this.campaignProvider.delete(campaign).then(
      sucess => console.log('Campanha deletada')
    )
      .catch(error => console.log('Não foi Possível Deletar a Campanha'));
  }

}
