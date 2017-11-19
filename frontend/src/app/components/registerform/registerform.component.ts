import { Component, OnInit, Injectable } from '@angular/core';

import { RegistrationService } from '../../services/registration.service';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})

export class RegisterformComponent implements OnInit {
  data;

  constructor(private regservice : RegistrationService) { }

  ngOnInit() {
    this.data = this.regservice.getEmployees();
  }

}
