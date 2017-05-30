import { Component, Input } from '@angular/core';
import { DonationModel } from "../../models/model-donation";

@Component({
  selector: 'donation-list-item',
  templateUrl: 'donation-list-item.html'
})
export class DonationListItem {

  @Input()
  donation: DonationModel;

}
