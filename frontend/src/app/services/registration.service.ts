import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RegistrationService {

  data : string = "123";
  json: JSON;
  private _url: string = "http://localhost:8080/api/food/admin";
  private _property: string = "/api/food/";
  constructor(public _http: Http, private _jsonp: Jsonp) { 
    console.log("OMEGALUL");
  }
  gaetUser(user: User, name: String){
    this._property += name;
    this._http.get(this._url).map((res => this.json = res.json()));
    console.log(this.json);
    return this.convertToUser(user, this.json);
  }
  getUser(user: User): Observable<User>{
    return this._http.get(this._url).map((res => res.json()));
  }
  convertToUser(user: User, jsonData: JSON): User{
    user.username = jsonData.stringify[0]; 
    user.email = jsonData[1];
    user.password = jsonData[2];
    user.diary = jsonData[3];
    user.recipes = jsonData[5];
    user.role = jsonData[6];
    return user;
  }

}
