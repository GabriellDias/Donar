import {Component, NgZone} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Place} from "../../models/place";
import {PlaceProvider} from "../../providers/place-provider";

@Component({
  selector: 'page-hemocentros-list',
  templateUrl: 'hemocentros-list.html',
})
export class HemocentrosList {

  places: Array<Place>;

  constructor(public navCtrl: NavController, public placeProvider: PlaceProvider,
              public ngZone: NgZone, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.placeProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.places = innerArray;
      })
    })
  }

}

