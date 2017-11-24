import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RegistrationService {

  private _url: string = "http://localhost:8080/api/user/";
  constructor(public _http: Http, private _jsonp: Jsonp) { 
    console.log("OMEGALUL");
  }

  getUser(user: User, userName: String): Observable<User>{
    return this._http.get(this._url + userName).map((res => res.json()));
  }

}
