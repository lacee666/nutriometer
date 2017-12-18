import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import { Observable } from 'rxjs/observable';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  
})

export class RegisterformComponent implements OnInit {
  
  registerModel: User;
  loginFailedMessage : string;
  @ViewChild('form') form;

  constructor(private router: Router, private userService: UserService) {
    this.registerModel = new User(); 
  }

  ngOnInit() {
  }
  
  onSubmit(){
    let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if(!regex.test(this.registerModel.email.toString())){
      this.loginFailedMessage = "Not a valid email!"
      return;
    }
    if(this.registerModel.username.length < 5){
      this.loginFailedMessage = "Username must be at least 5 characters!"
      return;
    }
    if(this.form.valid){
      this.userService.registerUser(this.registerModel)
      .then(() =>{
        this.router.navigateByUrl('/profile');  
      })
      .catch(() =>{
        this.loginFailedMessage = "Register failed!"
      });
    }

  }

}
