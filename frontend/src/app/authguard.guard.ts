import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,  
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    console.log(this.userService.getUserLoggedIn());
    if(!!this.userService.user){
     console.log('TRUE')
      return true;
    } else{
      console.log('FALSE')
      this.router.navigate(['/error'], {queryParams: {}});
      return false;
    }
  }
}
