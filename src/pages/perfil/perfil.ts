import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProvider } from "../../providers/user-provider";

import { User } from "../../models/user";

import { Information } from "../information/information";
import { Hemocentros} from "../hemocentros/hemocentros";
import { DonationList } from "../donation-list/donation-list";
import { CampaignsList } from "../campaigns-list/campaigns-list";
import { ExamList } from "../exam-list/exam-list";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {

  user: Array<User>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider,
          public ngZone: NgZone) {}

  ionViewDidLoad(){
   this.userProvider.reference.on('value', (snapshot) => {
     this.ngZone.run( () => {
       let innerArray = new Array();
       snapshot.forEach(elemento => {
         let el = elemento.val();
         innerArray.push(el);
       })
       this.user = innerArray;
     })
   })
  }

  donation(){
    this.navCtrl.setRoot(DonationList);
  }

  health(){
    this.navCtrl.setRoot(ExamList);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignsList);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }
}
