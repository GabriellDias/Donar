import { Component, Input } from '@angular/core';
import { Place } from '../../models/place';

@Component({
  selector: 'blood-centers-list-item',
  templateUrl: 'blood-centers-list-item.html'
})
export class BloodCentersListItem {

  @Input()
  place: Place;

}
