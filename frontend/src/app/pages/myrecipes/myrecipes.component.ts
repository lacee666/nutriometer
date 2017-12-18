import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/Recipe';
import {RecipeService} from '../../services/recipe.service';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css'],
})
export class MyrecipesComponent implements OnInit {
  recipeList: Array<Recipe>;
  constructor(private recipeService: RecipeService, private userService: UserService) { }

  ngOnInit() {
    this.recipeService.getUserRecipes(this.userService.getThisUser().username).subscribe(res => this.recipeList = res);
  }
 
}
