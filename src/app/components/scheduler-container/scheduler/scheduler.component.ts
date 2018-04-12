import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import 'dhtmlx-scheduler';
import {} from '@types/dhtmlxscheduler';
import 'dhtmlx-scheduler/codebase/locale/locale_fr.js';
import {SchedulerService} from '../scheduler.service';
import {Event} from '../../../models/event.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements AfterViewInit {

  @ViewChild('scheduler_here')
  schedulerContainer: ElementRef;

  // method to transform event from the scheduler to the DB
  private static serializeEvent(data: any, insert: boolean = false): Event {
    const result = {};
    for (const i in data) {
      if (i.charAt(0) === '$' || i.charAt(0) === '_') {
        continue;
      }
      if (insert && i === 'id') {
        continue;
      }
      if (data[i] instanceof Date) {
        result[i] = scheduler.templates.xml_format(data[i]);
      } else {
        result[i] = data[i];
      }
    }
    return result as Event;
  }


  constructor(private schedulerService: SchedulerService) {
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

    // loads all the user's events
    this.schedulerService.getForAuthenticatedUser()
      .subscribe(
        (data: JSON) => scheduler.parse(data, 'json'),
        error => console.log(error));


    // save an event
    scheduler.attachEvent('onEventAdded', (id, event) => {
      this.schedulerService.saveEvent(SchedulerComponent.serializeEvent(event, true))
        .subscribe(
          (data: Event) => event.id = data.id,
          error => console.log(error));
    });

    // update an event
    scheduler.attachEvent('onEventChanged', (id, event) => {
      this.schedulerService.updateEvent(id, SchedulerComponent.serializeEvent(event, false))
        .subscribe();
    });


    // delete an event
    scheduler.attachEvent('onEventDeleted', (id) => {
      this.schedulerService.deleteEvent(id)
        .subscribe();
    });
  }

}
