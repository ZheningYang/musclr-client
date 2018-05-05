import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {SchedulerService} from '../scheduler.service';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss']
})
export class FriendItemComponent implements OnInit {

  @Input()
  user: User;

  constructor(private schedulerService: SchedulerService) {
  }

  ngOnInit() {
  }

  loadEvents() {
    this.schedulerService.loadEvents(this.user.profile[0].username);
  }

}
