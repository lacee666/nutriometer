import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {Food} from '../models/Food';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class FoodsearchService {
  
  private url: string = "/api/food";
  constructor(public http: Http) { 
    
  }

  getFood(food: Food, foodName: String): Promise<Food>{
    const response : Observable<any> = this.http.get(this.url + '/' + foodName);
    const responsePromise: Promise<any> = response.toPromise();
    return responsePromise
    .then(res => res.json());
   
  }
}
