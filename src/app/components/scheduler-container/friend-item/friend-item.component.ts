import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss']
})
export class FriendItemComponent implements OnInit {

  @Input()
  user: User;

  constructor() {
  }

  ngOnInit() {
  }

}
