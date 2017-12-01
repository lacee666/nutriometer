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

    this.user = this.userService.getThisUser();
 
   
    console.log('bef');
    console.log(this.user.username);
    console.log('aft')
  }

}
