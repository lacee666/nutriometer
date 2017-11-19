import { Component, OnInit, Injectable } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
  providers: [RegistrationService],
})

export class RegisterformComponent implements OnInit {
  data = "123";

  constructor(private _regservice : RegistrationService) { }

  ngOnInit() {
    this._regservice.fetchData().subscribe((res => this.data = res.text()));
    console.log(this.data);
  }

}
