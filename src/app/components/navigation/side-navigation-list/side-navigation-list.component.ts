import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-navigation-list',
  templateUrl: './side-navigation-list.component.html',
  styleUrls: ['./side-navigation-list.component.css']
})
export class SideNavigationListComponent implements OnInit {
  @Output() closeSideNavigation = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onCloseSideNavigation() {
    this.closeSideNavigation.emit();
  }
}
