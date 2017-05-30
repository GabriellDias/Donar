import { Component, Input } from '@angular/core';

import {DonationModel} from "../../models/model-donation";

/**
 * Generated class for the DonationListItem component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'donation-list-item',
  templateUrl: 'donation-list-item.html'
})
export class DonationListItem {

  @Input()
  donation: DonationModel;

}
