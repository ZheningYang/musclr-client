import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class Neo4jService {

  private usersUrl = environment.neo4jUrl + 'users/';

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(this.usersUrl);
  }

}
