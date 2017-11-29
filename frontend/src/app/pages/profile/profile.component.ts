import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { 
    this.user = new User();
  }

  ngOnInit() {
    if(this.userService.getUserLoggedIn){
        this.userService.getThisUser(this.user);
    }
   
    console.log('bef');
    console.log(this.user);
    console.log('aft')
  }

}
