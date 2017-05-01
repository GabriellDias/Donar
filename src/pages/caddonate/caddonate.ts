import { Component } from '@angular/core';
import {NavController, LoadingController, NavParams, ViewController} from 'ionic-angular';
import {Donation} from "../donation/donation";
import {Donate} from "../../providers/donate";
import {DonationModel} from "../../models/model-donation";


@Component({
  selector: 'page-caddonate',
  templateUrl: 'caddonate.html',
})
export class Caddonate {

  donation: DonationModel;

  constructor(public navCtrl: NavController, 
  public loadCtrl: LoadingController, public donateProvider: Donate, 
  public navParams: NavParams, public viewCtrl: ViewController) {
    this.initialize();
  }

  private initialize(){
    this.donation = this.navParams.get('Donation');
    if(!this.donation){
      this.donation = new DonationModel();
    }
  }

  saveDonate(){
    this.donateProvider.save(this.donation);
    this.viewCtrl.dismiss();
    this.loadCad();
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
