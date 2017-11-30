import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers } from '@angular/http';
import {User} from '../models/User';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  private url: string = "/api/user";
  isUserLoggedIn: boolean;
  user: User;
  constructor(private http: Http, private router: Router) { 
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
    return this.http.get(this.url + this.user.username).map(res => user = res.json());
  }
  setThisUser(user: User): void{
    this.http.get(this.url + this.user.username).map(res => this.user = res.json());
  }
  getUser(userName: String): Observable<User>{
    console.log(this.url + userName)
    return this.http.get(this.url + userName).map((res => res.json()));
  }
  loginUser(user: User){
    const response : Observable<any> = this.http.post(this.url + '/login', user);
    const responsePromise: Promise<any> = response.toPromise();
    responsePromise
    .then(res => res.json())
    .then(() =>{
        this.router.navigate(['/profile']);  
    })
    .catch(() =>{
      return false;
    });
    this.setUserLoggedIn(true);
    this.setThisUser(user);
    return true;
  }
  registerUser(user: User){
    this.user = user;
    const response: Observable<any> = this.http.post(this.url, user);
    return this.http.post(this.url + '/register', user).subscribe();
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
