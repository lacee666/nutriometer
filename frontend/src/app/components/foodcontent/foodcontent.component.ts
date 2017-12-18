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
  currentDRV: number;
  findFlag: boolean;
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
    this.currentDRV = 0;
  }
  addFood(foodName: String, foodAmount: number): void{
    if(!foodAmount){
      foodAmount = 100;
    }
    try{
      
        this.foodSearchService.getFood(this.newFood, foodName).then(food =>{
        food.amount = foodAmount;
        food.calorie = food.calorie   * foodAmount / 100.0;
        food.protein = food.protein ;
        food.carbohydrate = food.carbohydrate ;
        food.fat = food.fat ;
        this.newFood = food;
        console.log("CALORIE: " + this.newFood.calorie);
        console.log("CALORIE: " + food.calorie);
        this.foodList.push(food)
        this.countElements(this.foodList[this.foodList.length - 1], foodAmount)
        this.findFlag = false;
      }).catch(res => this.findFlag = true);
    } catch(error){
      console.log("error finding food");
      this.findFlag = true;
    }
    
  }

  countElements(element: Food, foodAmount: number): void{
      this.currentCalorie += element.calorie;
      this.currentDRV = this.currentCalorie / this.drv * 100;
      this.currentCarb  += element.carbohydrate* foodAmount / 100.0;
      this.currentFat += element.fat * foodAmount / 100.0;
      this.currentProtein += element.protein* foodAmount / 100.0;
      this.max = (this.currentProtein + this.currentCarb + this.currentFat) / 100.0;
  }
  saveDiary(){
    let diary: Diary = new Diary();
    diary.foods = this.foodList;
    diary.calories = this.currentCalorie;
    diary.carbs = this.currentCarb/ this.max;
    diary.protein = this.currentProtein/ this.max;
    diary.fat = this.currentFat/ this.max;
    this.userService.addDiary(diary);
  }
  deleteFood(i: number): void{
    console.log("click happened");
    
    this.currentCalorie -= this.foodList[i].calorie;
    this.currentDRV = this.currentCalorie / this.drv * 100;
    this.currentCarb  -= this.foodList[i].carbohydrate;
    this.currentFat -= this.foodList[i].fat;
    this.currentProtein -= this.foodList[i].protein;
    this.max = (this.currentProtein + this.currentCarb + this.currentFat) / 100.0;
    this.foodList.splice(i,1);
    if(this.currentCalorie < 0.1){
      this.currentCarb = 0;
      this.currentFat = 0;
      this.currentProtein = 0;
    }
  }
}
