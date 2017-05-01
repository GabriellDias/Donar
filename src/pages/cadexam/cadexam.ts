import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import {Health} from "../health/health";
import {Exams} from "../../models/exams";
import {ExamsProvider} from "../../providers/exams-provider";

@Component({
  selector: 'page-cadexam',
  templateUrl: 'cadexam.html',
})
export class Cadexam {

  exams: Exams;

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController,
   public navParams: NavParams, public viewCtrl: ViewController, public examProvider: ExamsProvider) {
     this.initialize();
  }

  private initialize(){
    this.exams = this.navParams.get('Exams');
    if(!this.exams){
      this.exams = new Exams();
    }
  }

  saveExam(){
    this.examProvider.save(this.exams);
    this.viewCtrl.dismiss();
    this.loadSend();
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
