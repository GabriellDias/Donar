import { Component, Input } from '@angular/core';
import { Place } from '../../models/place';

@Component({
  selector: 'hemocentros-list-item',
  templateUrl: 'hemocentros-list-item.html'
})
export class HemocentrosListItem {

  @Input()
  place: Place;

}
