import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scheduler-container',
  templateUrl: './scheduler-container.component.html',
  styleUrls: ['./scheduler-container.component.scss']
})
export class SchedulerContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    (document.getElementsByClassName('navbar').item(0) as HTMLElement).style.backgroundColor = 'black';
  }

}
