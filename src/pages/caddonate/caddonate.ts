import { Component } from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {Donation} from "../donation/donation";

@Component({
  selector: 'page-caddonate',
  templateUrl: 'caddonate.html',
})
export class Caddonate {

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController) {
  }

  loadCad(){
    let loader = this.loadCtrl.create({
      content: "Salvando...",
      duration: 2000
    });
    loader.present();
  }

  backPage(){
    this.navCtrl.setRoot(Donation);
  }

}
