import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/Recipe';
import {RecipeService} from '../../services/recipe.service';
@Component({
  selector: 'app-recipesearch',
  templateUrl: './recipesearch.component.html',
  styleUrls: ['./recipesearch.component.css'],
})
export class RecipesearchComponent implements OnInit {
  recipeList: Array<Recipe>;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(res => this.recipeList = res);
  }

}
