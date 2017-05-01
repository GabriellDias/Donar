import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController } from 'ionic-angular';
import {Health} from "../health/health";

@Component({
  selector: 'page-cadexam',
  templateUrl: 'cadexam.html',
})
export class Cadexam {

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController,
   public navParams: NavParams) {
  }

  backExam(){
    this.navCtrl.setRoot(Health);
  }

  loadSend(){
    let loader = this.loadCtrl.create({
      content: "Salvando...",
      duration: 2000
    });
    loader.present();
  }

}
