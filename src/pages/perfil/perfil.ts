import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import {HomePage} from "../home/home";
import {Donation} from "../donation/donation";
import {Health} from "../health/health";
import { Information } from "../information/information";
import { Campaigns } from "../campaigns/campaigns";
import {User} from "../../models/user";
import { Hemocentros} from "../hemocentros/hemocentros";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {

  user: User

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:LoginProvider) {
    this.initialize();
  }

  ionViewDidLoad(){
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(HomePage)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  private initialize(){
    this.user = new User();
  }

  donation(){
    this.navCtrl.setRoot(Donation);
  }

  health(){
    this.navCtrl.setRoot(Health);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  campaigns(){
    this.navCtrl.setRoot(Campaigns);
  }

  hemocentros(){
    this.navCtrl.push(Hemocentros);
  }

}
