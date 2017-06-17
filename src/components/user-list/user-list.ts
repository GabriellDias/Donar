import {Component, Input} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.html'
})
export class UserList {

  @Input()
  user: User;

}
