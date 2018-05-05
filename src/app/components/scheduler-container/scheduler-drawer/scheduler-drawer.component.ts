import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {SchedulerService} from '../scheduler.service';

@Component({
  selector: 'app-scheduler-drawer',
  templateUrl: './scheduler-drawer.component.html',
  styleUrls: ['./scheduler-drawer.component.scss']
})
export class SchedulerDrawerComponent implements OnInit {

  friends: User[];

  constructor(private schedulerService: SchedulerService) {
  }

  ngOnInit() {
  }

  searchFriends(input: String) {
    this.schedulerService.getFriendsForAuthenticatedUserByUsername(input)
      .subscribe((data: User[]) => this.friends = data);
  }
}
