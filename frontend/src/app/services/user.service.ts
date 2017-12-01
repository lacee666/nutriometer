import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers } from '@angular/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import { Food } from '../models/Food';
import { Diary } from '../models/Diary';

@Injectable()
export class UserService {
  private url: string = "/api/user";
  isUserLoggedIn: boolean;
  user: User;
  constructor(private http: Http, private router: Router) { 
    this.isUserLoggedIn = false;
    //this.user = new User();
  }
  setUserLoggedIn(logged: boolean): void{
    this.isUserLoggedIn = logged;
  }
  getUserLoggedIn(): boolean{
    return this.isUserLoggedIn;
  }
  getThisUser(){   
    return this.user;
  }

  getUser(userName: String): Observable<User>{
    console.log(this.url + userName)
    return this.http.get(this.url + userName).map((res => res.json()));
  }
  loginUser(user: User){

    const response : Observable<any> = this.http.post(this.url + '/login', user);
    const responsePromise: Promise<any> = response.toPromise();
    return responsePromise
    .then(res => res.json())
    .then(res => this.user = res) 
    .then(() => {
      this.setUserLoggedIn(true);
    });  
  }
  registerUser(user: User){
    const response : Observable<any> = this.http.post(this.url + '/register', user);
    const responsePromise: Promise<any> = response.toPromise();
    return responsePromise
    .then(res => res.json())
    .then(res => this.user = res) 
    .then(() => {
      this.setUserLoggedIn(true);
    });     
  }

  addDiary(diary: Diary){
    const response : Observable<any> = this.http.post('/api/user/savediary/' + this.user.username, diary);
    const responsePromise: Promise<any> = response.toPromise();
    return responsePromise
    .then(res => res.json())
    .then(() => {
      this.router.navigateByUrl('diary');
    });  
  }
  getDiaries(): Observable<Array<Diary>>{
    return this.http.get('/api/user/diary/' + this.user.username).map((res => res.json()));
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
