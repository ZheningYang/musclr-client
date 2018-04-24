import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class Neo4jService {

  private usersUrl = environment.neo4jUrl + 'users/';
  private eventsUrl = environment.neo4jUrl + 'events/';

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(this.usersUrl);
  }

  getEvents() {
    return this.httpClient.get(this.eventsUrl);
  }

}
