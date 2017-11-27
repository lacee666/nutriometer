import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers } from '@angular/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RegistrationService {

  private _url: string = "http://localhost:8080/api/user/register";
  constructor(public _http: Http, private _jsonp: Jsonp) { 
    console.log("OMEGALUL");
  }

  getUser(user: User, userName: String): Observable<User>{
    return this._http.get(this._url + userName).map((res => res.json()));
  }
  registerUser(user: User){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this._http.post(this._url, JSON.stringify(user), {headers: headers}).map(res => res.json()).catch(this.handleErrorObservable).subscribe();
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
