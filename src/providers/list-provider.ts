import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {CampaignState} from "../models/campaign-state";

@Injectable()
export class ListProvider {

  getCampaignStates():Array<CampaignState>{
    return [CampaignState.Nova, CampaignState.Executando, CampaignState.Finalizada]
  }
}
