import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RegistrationService {

  data : string = "123";
  private _url: string = "http://localhost:8080/api/food/admin";
  constructor(public _http: Http, private _jsonp: Jsonp) { 
    console.log("OMEGALUL");
  }
  fetchData(){
    return this._http.get(this._url);
  }

}
