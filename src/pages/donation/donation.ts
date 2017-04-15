import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {Caddonate} from "../caddonate/caddonate";
import {Information} from "../information/information";

@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class Donation {

  constructor(public navCtrl: NavController) {
  }

  acessCad(){
    console.log("teste");
    this.navCtrl.push(Caddonate);
  }

  information(){
    this.navCtrl.push(Information);
  }

}
