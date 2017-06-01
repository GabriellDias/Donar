import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { ExamsProvider} from "../../providers/exams-provider";
import { Exams} from "../../models/exams";
import { Perfil} from "../perfil/perfil";
import { Hemocentros} from "../hemocentros/hemocentros";
import { Information} from "../information/information";
import { CampaignsList } from "../campaigns-list/campaigns-list";
import { ExamList } from "../exam-list/exam-list";

@Component({
  selector: 'page-exam-add',
  templateUrl: 'exam-add.html',
})
export class ExamAdd {

  exams: Exams;

  constructor(public navCtrl: NavController,  public navParams: NavParams, public viewCtrl: ViewController,
     public loadCtrl: LoadingController, public examProvider: ExamsProvider) {
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

  loadSend(){
    let loader = this.loadCtrl.create({
      content: "Salvando...",
      dismissOnPageChange: true
    });
    loader.present();
  }

  backExam(){
    this.navCtrl.setRoot(ExamList);
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
