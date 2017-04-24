import { Component } from '@angular/core';
import {NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class Information {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  inf1(){
    let alert = this.alertCtrl.create({
      title: 'Informações',
      subTitle: 'Todo sangue doado deve passar por vários'+
      ' testes para que possa ser utilizado com segurança. Na'+
      ' seleção de sangue são efetuados os seguintes testes:'+
      ' AIDS, Sífilis, Hepatite B, Hepatite C, Doença de Chagas'+
      ' e HTLV, Imunematologia, Sorologia. Além destes testes,'+
      ' será feito também um exame para saber o tipo sanguíneo.',
      buttons: ['OK']
    })

    alert.present();
  }
  
  inf2(){
    let alert = this.alertCtrl.create({
      title: 'Informações',
      subTitle: 'O motivo da agulha ser calibrosa é porque, ao contrário'+
      ' da agulha comum, o sangue não pode ser "sugado" por pressão,'+
      ' como ocorre quando o tiramos de um êmbolo (seringa). Ela serve'+
      ' para que o sangue não coagule e que as hemácias não se rompam no processo de doação.',
      buttons: ['OK']
    })

    alert.present();
  }

  inf3(){
    let alert = this.alertCtrl.create({
      title: 'Informações',
      subTitle: 'Sim, é normal sentir tontura, pois após a doação sua pressão'+
      ' baixa e então uma sensão de mal-estar, tontura, fraquesa. Para passar'+
      ' a sensação sente-se e coloque a cabeça entre os joelhos ou deite-se'+
      ' com as pernas elevadas. Isso ajuda na circulação de sangue na cabeça'+
      ' aliviando rapidamente os sintomas.',
      buttons: ['OK']
    })

    alert.present();
  }

  inf4(){
    let alert = this.alertCtrl.create({
      title: 'Informações',
      subTitle: 'A reposição do volume de plasma ocorre em 24 horas'+
      ' e a dos glóbulos vermelhos em 4 semanas. Entretanto, para o'+
      ' organismo atingir o mesmo nível de estoque de ferro que'+
      ' apresentava antes da doação, são necessárias 8 semanas para'+
      ' os homens e 12 semanas para as mulheres.',
      buttons: ['OK']
    })

    alert.present();
  }

  inf5(){
    let alert = this.alertCtrl.create({
      title: 'Informações',
      subTitle: 'Não existe essa de um sangue ser melhor do que o outro'+
      ' e sim existe o mais compativel do que o outro. O sangue mais compatível'+
      ' é o O- também conhecido como "sangue universal", pois é o único compatível'+
      ' com os outros e só pode receber sangue O-.',
      buttons: ['OK']
    })

    alert.present();
  }

  inf6(){
    let alert = this.alertCtrl.create({
      title: 'Informações',
      subTitle: 'Algumas situações podem favorecer essas reações,'+
      ' como por exemplo: uma noite mal dormida, estresse e ansiedade,'+
      ' estar mal alimentado e mal hidratado, etc.'+
      ' Durante a coleta de sangue podem surgir algumas reações leves como:'+
      ' Sensações de desmaio, suor, formigamento das mãos e pés, visão embaçada'+
      ' vômito, desmaio e raramente convulsão',
      buttons: ['OK']
    })

    alert.present();
  }
  

}
