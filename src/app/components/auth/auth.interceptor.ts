import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import {AuthService} from './auth.service';


// TODO code an interceptor to catch and handle error, with some nice alerts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  // will automatically add the token to each request if there is one
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const copiedReq = httpRequest.clone({headers: httpRequest.headers.set('x-authorization', this.authService.getToken())});
    return next.handle(copiedReq);
  }
}
