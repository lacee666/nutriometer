import { Component, OnInit} from '@angular/core';
import {menuItem} from './menuItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})

export class HeaderComponent implements OnInit {
  menuItems: Array<menuItem> = [
    {name: "HomePage", link: "index"},
    {name: "Food Search", link: "#"},
    {name: "Recipe Search", link: "https://youtube.com"},
    {name: "Sign in/up", link: "#"},
    {name: "Contact", link: "contact"},
  ];
  menu: menuItem = this.menuItems[0];
  navigate(name : string){
    console.log("NAVIGATED");
    this.router.navigate(["./" + name]);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
