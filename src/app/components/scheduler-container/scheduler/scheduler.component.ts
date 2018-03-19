import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import 'dhtmlx-scheduler';
import {} from '@types/dhtmlxscheduler';
import 'dhtmlx-scheduler/codebase/locale/locale_fr.js';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements AfterViewInit {

  @ViewChild('scheduler_here')
  schedulerContainer: ElementRef;

  constructor() {
  }

  // PRO-TIP
  // ngOnInit isn't always the solution, check lifecycles, here for the sched to know the height of it's container, we have to wait for the
  // container's initialisation
  ngAfterViewInit() {
    // a workout will last 30 min by default
    scheduler.config.event_duration = 60;
    scheduler.config.auto_end_date = true;

    // we directly show the ligthbox on dblclick
    scheduler.config.details_on_create = true;
    scheduler.config.details_on_dblclick = true;

    // bigger hour cells + beginning/ending of hours
    scheduler.config.hour_size_px = 88;
    scheduler.config.first_hour = 6;
    scheduler.config.last_hour = 22;

    scheduler.config.xml_date = '%Y-%m-%d %H:%i';

    scheduler.init(this.schedulerContainer.nativeElement, new Date());
  }
}
