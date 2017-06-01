import { Component, Input } from '@angular/core';

import { Campaign } from "../../models/campaign";

@Component({
  selector: 'campaign-list-item',
  templateUrl: 'campaign-list-item.html'
})
export class CampaignListItem {

  @Input()
  campaign: Campaign;

}
