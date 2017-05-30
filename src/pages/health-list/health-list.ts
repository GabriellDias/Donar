import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {Exams} from "../../models/exams";
import {ExamsProvider} from "../../providers/exams-provider";

@Component({
  selector: 'page-health-list',
  templateUrl: 'health-list.html',
})
export class HealthList {

  exams: Array<Exams>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public examsProvider: ExamsProvider, public ngZone: NgZone,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
    this.examsProvider.reference.on('child_removed', (snapshot) => {
      let examRemoved = snapshot.val();
      this.toastCtrl.create({
        message: 'Exame removido',
        duration: 2000
      }).present();
    })

    this.examsProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.array.array.forEach(elemento => {
          let el = elemento.val();innerArray.push(el);
        })
        this.exams = innerArray;
      })
    })
  }

  deleteExam(exams: Exams){
    this.examsProvider.delete(exams).then(
      sucess => console.log('Exame deletado')
    )

    .catch(error => console.log('Não foi possível excluir'));
  }

}
