import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) {
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
