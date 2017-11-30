import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {Food} from '../models/Food';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class FoodsearchService {
  
  private _url: string = "/api/food/";
  constructor(public _http: Http, private _jsonp: Jsonp) { 
    console.log("OMEGALUL");
  }

  getFood(food: Food, foodName: String): Observable<Food>{
    return this._http.get(this._url + foodName).map((res => res.json()));
  }
}
