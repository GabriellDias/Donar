import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

import {Credencial} from "../../models/credencial";
import {LoginProvider} from "../../providers/login-provider";
import {HomePage} from "../home/home";
import {Perfil} from "../perfil/perfil";

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})

export class SignUp {

  credencial: Credencial;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider){
    this.credencial = new Credencial();
  }

  ionViewDidLoad(){
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(Perfil)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  SignUp(){
    this.loginProvider.signup(this.credencial);
  }

  btnBack(){
    this.navCtrl.push(HomePage);
  }

  moviment() {
    var atual_fs, next_fs, prev_fs;

    $('.next').click(function () {

      atual_fs = $(this).parent();
      next_fs = $(this).parent().next();


      $('#progress li').eq($('fieldset').index(next_fs)).addClass('active');
      atual_fs.hide(800);
      next_fs.show(800);
    });

    $('.prev').click(function () {
      atual_fs = $(this).parent();
      prev_fs = $(this).parent().prev();

      $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('active');
      atual_fs.hide(800);
      prev_fs.show(800);
    });

    $('#formulario input[type=submit]').click(function () {
      return false;
    });
  }
}


