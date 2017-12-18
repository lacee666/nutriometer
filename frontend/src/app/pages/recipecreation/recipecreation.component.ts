import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/Recipe';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-recipecreation',
  templateUrl: './recipecreation.component.html',
  styleUrls: ['./recipecreation.component.css'],
})
export class RecipecreationComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private router: Router, private userService: UserService) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }
  addRecipe(recipeName: String, recipeText: String): void{
      this.recipe.name = recipeName;
      this.recipe.details = recipeText;
      this.recipe.username = this.userService.getThisUser().username;
      try{
        this.recipeService.addRecipe(this.recipe);
        this.router.navigate(['/myrecipes']);
      } catch(error){

      }
      
      console.log('Recipe added');
  }
}
