import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  friendRequestNumber: number;

  constructor(private authService: AuthService) {

    this.authService.friendRequestNumber$.subscribe(
      (data: number) => this.friendRequestNumber = data
    );
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
