import { Component, OnInit } from '@angular/core';
import {Food} from '../../models/Food';
import {FoodsearchService } from '../../services/foodsearch.service';
@Component({
  selector: 'app-foodcontent',
  templateUrl: './foodcontent.component.html',
  styleUrls: ['./foodcontent.component.css'],
})
export class FoodcontentComponent implements OnInit {
  foodList: Array<Food>;
  currentCalorie: number;
  currentCarb: number;
  currentFat: number;
  currentProtein: number;
  currentHolder: number[];
  max: number;
  newFood: Food;
  drv: number;
  constructor(private foodSearchService: FoodsearchService) { }

  ngOnInit() {
    this.foodList = new Array<Food>();
    this.newFood = new Food();
    this.currentCalorie = 0;
    this.currentCarb = 0;
    this.currentFat = 0;
    this.currentProtein = 0;
    this.drv = 2000;
    this.currentHolder = [0,0,0,0];
    this.max = 1;
  }
  addFood(foodName: String): void{
    this.foodSearchService.getFood(this.newFood, foodName).subscribe(food => this.foodList.push(food));
    this.countElements(this.foodList[this.foodList.length - 1]);
  }

  countElements(element: Food): void{
      this.currentCalorie += element.calorie;
      this.currentCarb  += element.carbohydrate;
      this.currentFat += element.fat;
      this.currentProtein += element.protein;
      this.max = (this.currentProtein + this.currentCarb + this.currentFat) / 100;
  }

  }
}
