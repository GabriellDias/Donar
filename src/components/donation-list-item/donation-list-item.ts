import { Component, Input } from '@angular/core';
import { Donation } from "../../models/donation";

@Component({
  selector: 'donation-list-item',
  templateUrl: 'donation-list-item.html'
})
export class DonationListItem {

  @Input()
  donation: Donation;

}
