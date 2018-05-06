import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/locale/locale_fr.js';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_editors.js';
import {} from '@types/dhtmlxscheduler';

import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {SchedulerService} from '../scheduler.service';
import {Event} from '../../../models/event.model';
import {Workout} from '../../../models/workout.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../../auth/auth.service';

// import {} from '@types/dhtmlxscheduler'; is mandatory

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('scheduler_here')
  schedulerContainer: ElementRef;

  my_workouts = [];

  max_participant_number = [];

  alert_opts = [
    {key: 1, label: 'None'},
    {key: 2, label: 'On start date'},
    {key: 3, label: '1 day before'}
  ];

  friend_list = [];

  fieldConfig = {
    myEvent: [
      {name: 'Titre', height: 30, type: 'textarea', map_to: 'text', focus: true},
      {name: 'Séance', height: 50, type: 'select', map_to: 'workout._id', options: this.my_workouts},
      {name: 'Maximum de participants', height: 50, type: 'select', map_to: 'max_participant_number', options: this.max_participant_number},
      {name: 'time', height: 72, type: 'time', map_to: 'auto'}
    ],
    addFriends: [
      {name: 'Amis', height: 50, type: 'combo', map_to: 'friend_list', options: this.friend_list},
      {name: 'Participants', height: 1000, type: 'participant_template', map_to: 'participant_list'}
    ],
    default: [
      {name: 'Titre', height: 50, type: 'textarea', map_to: 'text', focus: true},
      {name: 'Séance', height: 50, type: 'textarea', map_to: 'workout.name'},
      {name: 'Je participe', height: 40, type: 'checkbox', map_to: 'participate'},
      {name: 'Maximum de participants', height: 40, type: 'select', map_to: 'max_participant_number', options: this.max_participant_number},
    ]
  };

  buttonConfig = {
    default: ['dhx_delete_btn', 'custom_btn_invite'],
    addFriends: ['dhx_delete_btn', 'custom_btn_retour']
  };

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
      if (i === 'workout') {
        continue;
      }
      if (i === 'workout._id') {
        result['workout'] = data[i];
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


  constructor(private schedulerService: SchedulerService, private authService: AuthService) {

    for (let i = 0; i < 10; i++) {
      this.max_participant_number.push({key: i + 1, label: (i + 1).toString()});
    }

    this.schedulerService.getWorkoutsForAuthenticatedUser().subscribe(
      (workouts: Workout[]) => {
        workouts.forEach(workout => this.my_workouts.push({key: workout._id, label: workout.name}));
      }
    );

    this.schedulerService.eventList$.subscribe(
      events => scheduler.parse(events, 'json'),
      error => console.log(error)
    );
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
    scheduler.config.details_on_dblclick = false;

    // bigger hour cells + beginning/ending of hours
    scheduler.config.hour_size_px = 88;
    scheduler.config.first_hour = 6;
    scheduler.config.last_hour = 22;

    scheduler.config.xml_date = '%Y-%m-%d %H:%i';

    scheduler.locale.labels['custom_btn_invite'] = 'Inviter';
    scheduler.locale.labels['custom_btn_retour'] = 'Retour';

    scheduler.init(this.schedulerContainer.nativeElement, new Date());

    scheduler.clearAll();

    // loads all the user's events
    this.schedulerService.getEventsForAuthenticatedUser()
      .subscribe(
        (data: JSON) => scheduler.parse(data, 'json'),
        error => console.log(error)
      );


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

    // select correct fields depending on if the user is the creator of the event or not
    scheduler.attachEvent('onBeforeLightbox', (id) => {
      const ev = scheduler.getEvent(id);
      scheduler.resetLightbox();
      if (ev.creator === this.authService.getId()) {
        scheduler.config.lightbox.sections = this.fieldConfig['myEvent'];
      } else {
        scheduler.config.lightbox.sections = this.fieldConfig['default'];

        // disable title
        const sectionTitre = scheduler.formSection('Titre');
        sectionTitre.control.disabled = true;

        // disable max
        const sectionMax = scheduler.formSection('Maximum de participants');
        sectionMax.control.disabled = true;

        // disable workout
        const sectionWorkout = scheduler.formSection('Séance');
        sectionWorkout.control.disabled = true;
      }
      return true;
    });

    scheduler.attachEvent('onClick', function (id, e) {
      scheduler.showLightbox(id);
      return true;
    });
  }

  ngOnDestroy() {
    scheduler.config.lightbox.sections = this.fieldConfig['default'];
  }
}
