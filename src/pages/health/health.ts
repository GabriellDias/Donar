import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {Perfil} from "../perfil/perfil";
import { Information } from "../information/information"

@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class Health {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Health');
  }

  home(){
    this.navCtrl.push(Perfil);
  }

  information(){
    this.navCtrl.push(Information);
  }

}
