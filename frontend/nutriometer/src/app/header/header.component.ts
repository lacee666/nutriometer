import { Component, OnInit} from '@angular/core';
import {menuItem} from './menuItem';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})

export class HeaderComponent implements OnInit {
  menuItems: Array<menuItem> = [
    {name: "HomePage", link: "#"},
    {name: "Food Search", link: "#"},
    {name: "Recipe Search", link: "https://youtube.com"},
    {name: "Sign in/up", link: "#"},
    {name: "Contact", link: "#"},
  ];
  menu: menuItem = this.menuItems[0];
  constructor() { }

  ngOnInit() {
  }

}
