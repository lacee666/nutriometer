import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  userLoggedIn : boolean;
  constructor(private userService: UserService) {
    this.userLoggedIn = userService.getUserLoggedIn();
  }

  ngOnInit() {
  }
  logout(){
    this.userService.setUserLoggedIn(false);
  }

}
