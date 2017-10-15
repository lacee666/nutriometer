package com.nutriometer.controller;



import com.nutriometer.model.Food;
import com.nutriometer.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@Controller
@RequestMapping("/")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @GetMapping("/foodsearch")
    public String foodSearchGet(Model model) {
        model.addAttribute("food", new Food());
        return "foodsearch";
    }


    @PostMapping("/foodsearch")
    public String foodSearchPost(@ModelAttribute Food food, @RequestParam(value = "g", required = false) String g, Model model) {
        Food tempFood = foodService.findbyfoodName(food.getName());
        if (tempFood != null) {
            ArrayList<String> foodList = new ArrayList<String>();
            foodList.add(tempFood.getName());
            foodList.add(g);
            model.addAttribute("foodNameList", foodList);
            System.out.println("Got Food");
            return "foodsearch";
        } else{
            System.out.println("null sorry bro");
            return "foodsearch";
        }
    }



}