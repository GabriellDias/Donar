import { Component, NgZone } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import {CampaignProvider} from "../../providers/campaign-provider";

import { Campaign } from "../../models/campaign";

import { Hemocentros } from "../hemocentros/hemocentros";
import { Perfil } from "../perfil/perfil";
import { Information } from "../information/information";

@Component({
  selector: 'page-campaigns-list',
  templateUrl: 'campaigns-list.html',
})
export class CampaignsList {

  campaigns: Array<Campaign>;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public campaignProvider: CampaignProvider,
              public ngZone: NgZone, public toastCtrl: ToastController, public socialSharing: SocialSharing) {}

  ionViewDidLoad(){

    /*
     * value = Escuta todas as alterações da referência
     * child_added - Ouvinte para quando um filho é adicionado
     * child_changed - Ouvinte para quando fllho for alterado
     * child_removed - Ouvinte para qunado filho for deletado
     * child_moved - Ouviente para acompanhar mudanças na prioridade de um filho
     */

    this.campaignProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.campaigns = innerArray;
      })
    })
  }

  acessEnd(){
    let alert = this.alertCtrl.create({
      title: 'Endereço',
      subTitle: 'Av. Brasil Norte, 3631 - Cidade Universitária, Anápolis - GO',
      buttons: ['OK']
    })
    alert.present();
  }

  acessTel(){
    let alert = this.alertCtrl.create({
      title: 'Telefone',
      subTitle: '(062) 99342-1158',
      buttons: ['OK']
    })
    alert.present();
  }

  acessSite(){
    let alert = this.alertCtrl.create({
      title: 'Site',
      subTitle: 'www.hemocentroanapolis.com.br',
      buttons: ['OK']
    })
    alert.present();
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

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

}
