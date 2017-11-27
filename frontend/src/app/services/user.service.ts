import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  isUserLoggedIn: boolean;
  constructor() { 
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn(logged: boolean): void{
    this.isUserLoggedIn = logged;
  }

  getUserLoggedIn(): boolean{
    return this.isUserLoggedIn;
  }
}
