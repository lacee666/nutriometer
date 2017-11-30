import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers } from '@angular/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class UserService {
  private _url: string = "http://localhost:8080/api/user/";
  isUserLoggedIn: boolean;
  user: User;
  constructor(private _http: Http, private _jsonp: Jsonp) { 
    this.isUserLoggedIn = false;
    this.user = new User();
  }
  setUserLoggedIn(logged: boolean): void{
    this.isUserLoggedIn = logged;
  }
  getUserLoggedIn(): boolean{
    return this.isUserLoggedIn;
  }
  getThisUser(user: User): Observable<User>{
    
    return this._http.get(this._url + this.user.username).map(res => user = res.json());
  }
  setThisUser(user: User): void{
    this.user = user;
  }
  getUser(userName: String): Observable<User>{
    console.log(this._url + userName)
    return this._http.get(this._url + userName).map((res => res.json()));
  }

  registerUser(user: User){
    const headers = new Headers();
    this.user = user;
    headers.append('Content-Type', 'application/json; charset=utf-8');
    console.log('Register in progress...')
    return this._http.post(this._url + 'register', JSON.stringify(user), {headers: headers}).map(res => res.json()).subscribe();
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
