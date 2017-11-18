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
    {name: "HomePage", link: ""},
    {name: "Food Search", link: "foodsearch"},
    {name: "Recipe Search", link: "recipesearch"},
    {name: "Sign in/up", link: "login"},
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
