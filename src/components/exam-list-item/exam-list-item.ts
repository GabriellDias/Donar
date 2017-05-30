import { Component, Input } from '@angular/core';

import {Exams} from "../../models/exams";

@Component({
  selector: 'exam-list-item',
  templateUrl: 'exam-list-item.html'
})
export class ExamListItem {

  @Input()
  exams: Exams;

}
