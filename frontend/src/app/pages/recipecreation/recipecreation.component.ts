import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/Recipe';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipecreation',
  templateUrl: './recipecreation.component.html',
  styleUrls: ['./recipecreation.component.css'],
})
export class RecipecreationComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }
  addRecipe(recipeName: String, recipeText: String): void{
      this.recipe.name = recipeName;
      this.recipe.details = recipeText;
      this.recipeService.addRecipe(this.recipe);
      console.log('Recipe added');
  }
}
