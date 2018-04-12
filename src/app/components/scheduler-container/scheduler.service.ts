import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Event} from '../../models/event.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class SchedulerService {

  private eventsUrl = environment.serverUrl + 'events/';


  constructor(private http: HttpClient) {
  }

  getForAuthenticatedUser() {
    return this.http.get(this.eventsUrl);
  }

  saveEvent(event: Event): Observable<Object> {
    return this.http.post(this.eventsUrl, JSON.stringify(event), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  updateEvent(id: string, event: Event): Observable<Object> {
    return this.http.patch(this.eventsUrl + id, JSON.stringify(event), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  deleteEvent(id: string): Observable<Object> {
    return this.http.delete(this.eventsUrl + id);
  }

}
