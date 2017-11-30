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
  errorFlag: boolean;
  constructor(private router: Router, private userService: UserService) {
    this.user = new User(); 
    this.errorFlag = false;
  }

  ngOnInit() {
  }
  
  loginUser(e){
    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    this.user.username = username;
    this.user.password = password;
    if(!this.userService.loginUser(this.user)){
      this.errorFlag = true;
    }
  }
}
