import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import {CampaignProvider} from "../../providers/campaign-provider";

import { Campaign } from "../../models/campaign";

@Component({
  selector: 'page-campaigns-list',
  templateUrl: 'campaigns-list.html',
})
export class CampaignsList {

  campaign: Array<Campaign>;

  constructor(public navCtrl: NavController, public campaignProvider: CampaignProvider,
              public ngZone: NgZone, public toastCtrl: ToastController, public socialSharing: SocialSharing) {}

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

  twitterShare(){
    this.socialSharing.shareViaTwitter("Sua doação pode salvar uma vida","assets/img/logo_branca.png", null);
  }

  whatsappShare(){
    this.socialSharing.shareViaWhatsApp("Sua doação pode salvar uma vida","assets/img/logo_branca.png", null);
  }

  instagramShare(){
    this.socialSharing.shareViaInstagram("Sua doação pode salvar uma vida","assets/img/logo_branca.png");
  }

}
