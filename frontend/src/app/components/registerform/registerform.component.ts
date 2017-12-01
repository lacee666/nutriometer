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
    if(this.form.valid){
      this.userService.registerUser(this.registerModel)
      .then(() =>{
        this.router.navigateByUrl('/profile');  
      })
      .catch(() =>{
        this.loginFailedMessage = "Login failed!"
      });
    }

  }

}
