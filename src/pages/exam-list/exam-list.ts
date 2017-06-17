import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { ExamProvider } from "../../providers/exam-provider";

import { Exams } from "../../models/exams";

import { Perfil } from "../perfil/perfil";
import { Hemocentros } from "../hemocentros/hemocentros";
import { Information } from "../information/information";
import { CampaignsList} from "../campaigns-list/campaigns-list";
import { ExamAdd } from "../exam-add/exam-add";

@Component({
  selector: 'page-exam-list',
  templateUrl: 'exam-list.html',
})
export class ExamList {

  exams: Array<Exams>;

  constructor(public navCtrl: NavController, public examProvider: ExamProvider, public ngZone: NgZone,
    public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    this.examProvider.reference.on('child_removed', (snapshot) => {
      let examRemoved = snapshot.val();
      this.toastCtrl.create({
        message: 'Exame Removido!',
        duration: 1500
      }).present();
    })

    this.examProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.exams = innerArray;
      })
    })
  }

  updateExam(exams: Exams){
    this.navCtrl.push(ExamAdd, {'exams' : exams});
  }

  insertExam(){
    this.navCtrl.push(ExamAdd, {'exams': new Exams()});
  }

  deleteExam(exams: Exams){
    this.examProvider.delete(exams).then(
      sucess => console.log('Exame deletado')
    ).catch(error => console.log('Não foi possível excluir'));
  }

  home(){
    this.navCtrl.setRoot(Perfil);
  }

  hemocentros(){
    this.navCtrl.setRoot(Hemocentros);
  }

  campaigns(){
    this.navCtrl.setRoot(CampaignsList);
  }

  information(){
    this.navCtrl.setRoot(Information);
  }

}
