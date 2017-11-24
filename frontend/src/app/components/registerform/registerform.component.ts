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

  constructor(private _regservice : RegistrationService) { }

  ngOnInit() {
    this._regservice.getUser(this.user).subscribe(user => this.user = user);/*.subscribe((res => this.data = res.text()));*/
    console.log(this.user.username);
  }

}
