import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Event} from '../../models/event.model';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SchedulerService {

  private eventsUrl = environment.serverUrl + 'events/';
  private usersUrl = environment.serverUrl + 'users/';
  private eventListSubject = new Subject();
  eventList$ = this.eventListSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  loadEvents(username) {
    this.getFriendsEvents(username).subscribe(
      data => this.eventListSubject.next(data)
    );
  }

  getEventsForAuthenticatedUser() {
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

  getFriendsForAuthenticatedUser() {
    return this.http.get(this.usersUrl + 'friends');
  }

  getFriendsForAuthenticatedUserByUsername(username: String) {
    return this.http.get(this.usersUrl + 'friends/' + username);
  }

  getFriendsEvents(username: String) {
    return this.http.get(this.eventsUrl + 'friends/' + username);

  }
}
