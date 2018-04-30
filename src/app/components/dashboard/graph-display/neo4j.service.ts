import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class Neo4jService {

  private usersUrl = environment.neo4jUrl + 'users/';
  private eventsUrl = environment.neo4jUrl + 'events/';
  private gymsUrl = environment.neo4jUrl + 'gyms/';
  private townsUrl = environment.neo4jUrl + 'towns/';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(events?, gyms?, towns?) {
    const params = new HttpParams()
      .set('Events', events)
      .set('Gyms', gyms)
      .set('Towns', towns);

    return this.httpClient.get(this.usersUrl, {params});
  }

  getEvents(gyms, towns, users) {
    const params = new HttpParams()
      .set('Gyms', gyms)
      .set('Towns', towns)
      .set('Users', users);
    return this.httpClient.get(this.eventsUrl, {params});
  }

  getGyms(events, towns, users) {
    const params = new HttpParams()
      .set('Events', events)
      .set('Towns', towns)
      .set('Users', users);
    return this.httpClient.get(this.gymsUrl, {params});
  }

  getTowns(events, gyms, users) {
    const params = new HttpParams()
      .set('Events', events)
      .set('Gyms', gyms)
      .set('Users', users);
    return this.httpClient.get(this.townsUrl, {params});
  }
}
