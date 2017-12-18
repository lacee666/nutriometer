import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import {Recipe} from '../models/Recipe';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  private url: string = "/api/recipe";
  constructor(public http: Http) { 
    console.log("OMEGALUL");
  }

  getRecipes(): Observable<Array<Recipe>>{
    return this.http.get(this.url + '/all').map((res => res.json()));
  }
  getUserRecipes(userName: String): Observable<Array<Recipe>>{
    return this.http.get(this.url + '/' + userName).map(res => res.json());
  }
  addRecipe(recipe: Recipe){
    try{
      const response : Observable<any> = this.http.post(this.url + '/addrecipe', recipe);      
      const responsePromise: Promise<any> = response.toPromise();
    }catch(error){
      console.log('LOOOOOOOOOOOOOOOOL 4HEad')
    } 
  }
}
