import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {Information} from "../information/information";
import { ExamAdd } from "../exam-add/exam-add";
import { Perfil } from "../perfil/perfil";
import { Hemocentros} from "../hemocentros/hemocentros";
import {CampaignsList} from "../campaigns-list/campaigns-list";

@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class Exam {

  constructor(public navCtrl: NavController) {
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

  cadexam(){
    this.navCtrl.push(ExamAdd);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignsList);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

}
