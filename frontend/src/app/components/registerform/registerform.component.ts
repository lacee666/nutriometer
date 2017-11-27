import { Component, OnInit, Injectable } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import {User} from '../../models/User';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  providers: [RegistrationService],
})

export class RegisterformComponent implements OnInit {
  user: User;
  userName: string;
  constructor(private _regservice : RegistrationService) { }

  ngOnInit() {
    //this._regservice.getUser(this.user, "admin").subscribe(user => this.user = user);/*.subscribe((res => this.data = res.text()));*/
    //console.log(this.user.username);
  }
  getUser(userName: string): void{
    //this._regservice.getUser(this.user, userName).subscribe(user => this.user = user);
  }
  registerUser(e): void{
    e.preventDefault();
    let user: User = new User();
    user.email = e.target.elements[0].value;
    user.username = e.target.elements[1].value;
    user.password = e.target.elements[2].value;
    console.log(JSON.stringify(user));
    let a = this._regservice.registerUser(user);
    console.log("HE HE");
    console.log(a);
    console.log("HE HE XD");
  }
}
