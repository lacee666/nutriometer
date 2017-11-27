import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if(username == 'admin' && password == 'admin'){
      this.userService.setUserLoggedIn(true);
      this.router.navigate(['contact']);
    }
    return false;
  }
}
