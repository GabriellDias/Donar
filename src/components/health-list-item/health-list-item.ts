import { Component, Input } from '@angular/core';

import {Exams} from "../../models/exams";

/**
 * Generated class for the HealthListItem component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'health-list-item',
  templateUrl: 'health-list-item.html'
})
export class HealthListItem {

  @Input()
  exams: Exams;

}
