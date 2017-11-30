import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {Recipe} from '../models/Recipe';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  private _url: string = "/api/recipe/";
  constructor(public _http: Http, private _jsonp: Jsonp) { 
    console.log("OMEGALUL");
  }

  getRecipes(): Observable<Array<Recipe>>{
    return this._http.get(this._url + 'all').map((res => res.json()));
  }
}
