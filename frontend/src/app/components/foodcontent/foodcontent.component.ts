import { Component, OnInit } from '@angular/core';
import {Food} from '../../models/Food';
import {FoodsearchService } from '../../services/foodsearch.service';
import { UserService } from '../../services/user.service';
import { Diary } from '../../models/Diary';
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
  constructor(private foodSearchService: FoodsearchService, private userService: UserService) { }

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
  addFood(foodName: String, foodAmount: number): void{
    this.foodSearchService.getFood(this.newFood, foodName).then(food =>{
      food.amount = foodAmount;
      food.calorie = food.calorie * foodAmount / 100.0;
      food.protein = food.protein * foodAmount / 100.0;
      food.carbohydrate = food.carbohydrate * foodAmount / 100.0;
      food.fat = food.fat * foodAmount / 100.0;
      this.foodList.push(food)
    });
    console.log(this.foodList[0]);
    this.countElements(this.foodList[this.foodList.length - 1], foodAmount);
  }

  countElements(element: Food, foodAmount: number): void{
      this.currentCalorie += element.calorie;
      this.currentCarb  += element.carbohydrate;
      this.currentFat += element.fat;
      this.currentProtein += element.protein;
      this.max = (this.currentProtein + this.currentCarb + this.currentFat) / 100.0;
  }
  saveDiary(){
    let diary: Diary = new Diary();
    diary.foods = this.foodList;
    this.userService.addDiary(diary);
  }
  
}
