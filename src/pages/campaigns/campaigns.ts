import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html',
})
export class Campaigns {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad Campaigns');
  }

acessEnd(){
  console.log("Av Marciano França, Nº4, Centro, Ouro verde de Goiás.");
}

acessTel(){
  console.log("06293342-1158");
}

acessSite(){
  console.log("www.hemocentroanapolis.com.br");
}
}
