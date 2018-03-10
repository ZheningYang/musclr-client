import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
import {RequestOptions} from './request-options.interface';

@Injectable()
export class AuthService {

  private usersUrl = environment.serverUrl + 'users/';
  private httpOptions: RequestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response'
  };

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  login(email: string, password: string) {
    const body = {email, password};

    return this.httpClient.post(this.usersUrl + 'login', body, this.httpOptions)
      .map((httpResponse: HttpResponse<any>) => {
        localStorage.setItem('token', httpResponse.headers.get('X-Authorization'));
        return httpResponse.body;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token ? token : '';
  }

  isAuthenticated(): boolean {
    return this.getToken() !== '';
  }

}
