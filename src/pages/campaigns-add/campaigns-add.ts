import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Campaign } from "../../models/campaign";
import{ListProvider} from "../../providers/list-provider";
import{CampaignProvider} from "../../providers/campaign-provider";
import {CampaignState} from "../../models/campaign-state";

@Component({
  selector: 'page-campaigns-add',
  templateUrl: 'campaigns-add.html',
})
export class CampaignsAdd {

  campaign: Campaign;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public campaignProvider: CampaignProvider, public listProvider: ListProvider) {
                this.initialize();
              }

private initialize(){
  this.campaign = this.navParams.get('campaign');
  if(!this.campaign){
    this.campaign = new Campaign();
  }
}

getStateValue(campaignState: CampaignState):string{
  return CampaignState[campaignState];
}

  saveCampaign(){
    this.campaignProvider.save(this.campaign);
    this.viewCtrl.dismiss();
  }

}
