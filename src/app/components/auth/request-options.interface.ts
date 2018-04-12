// custom interface so that angular won't complain while building the app (build != serve)

import {HttpHeaders, HttpParams} from '@angular/common/http';

export interface RequestOptions {
  body?: any;
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
  params?: HttpParams | { [param: string]: string | Array<string> };
  reportProgress?: boolean;
  responseType?:  'json' ;
  withCredentials?: boolean;
}
