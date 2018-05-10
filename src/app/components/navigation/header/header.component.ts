import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mySections = [
    {'name':'Accueil', 'routerLink':'/'},
    {'name':'News', 'routerLink':'/news'},
    {'name':'Communauté', 'routerLink':'/community'},
    {'name':'Exercices', 'routerLink':'/exercises'},
    {'name':'Séances', 'routerLink':'/workout'}
  ]

  selectedIndex: number;

  select(index: number) {
    this.selectedIndex = index;
  }

  thisFocus() {
    this.selectedIndex = -1;
  }

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.selectedIndex = 0;
  }

  logout() {
    this.authService.logout();
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
