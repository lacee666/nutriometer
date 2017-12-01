import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {

  
  model: User;
  loginFailedMessage : string;
  @ViewChild('form') form;
  constructor(private router: Router, private userService: UserService) {
    this.model = new User(); 

  }

  ngOnInit() {
  }
  
  onSubmit(){
    if(this.form.valid){
      this.userService.loginUser(this.model)
      .then(() =>{
        this.router.navigate(['/profile']);  
      })
      .catch(() =>{
        this.loginFailedMessage = "Login failed!"
      });
    }

  }
}
