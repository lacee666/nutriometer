import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  user: User;
  constructor(private router: Router, private userService: UserService) {
    this.user = new User(); 
  }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    console.log("Before get");
    this.userService.getUser(username).subscribe(res => this.user = res);
    console.log(this.user.username);
    if(username == this.user.username && password == this.user.password){
      this.userService.setUserLoggedIn(true);
      this.userService.setThisUser(this.user);
      this.router.navigate(['profile']);
    }
    return false;
  }
}
