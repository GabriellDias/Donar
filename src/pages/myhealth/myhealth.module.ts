import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Myhealth } from './myhealth';

@NgModule({
  declarations: [
    Myhealth,
  ],
  imports: [
    IonicModule.forChild(Myhealth),
  ],
  exports: [
    Myhealth
  ]
})
export class MyhealthModule {}
