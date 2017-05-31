import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdMob } from '@ionic-native/admob';
import { Platform } from 'ionic-angular';

import {LoginProvider} from "../../providers/login-provider";

import {User} from "../../models/user";

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

  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:LoginProvider,
              private admob: AdMob, private platform: Platform) {
    this.initialize();
  }

  private initialize(){
    this.user = this.navParams.get('user');
    if(!this.user) {
      this.user = new User();
    }
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
