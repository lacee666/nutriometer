package com.nutriometer.api;

import com.nutriometer.model.Food;
import com.nutriometer.repository.FoodRepository;
import com.nutriometer.service.FoodService;
import com.nutriometer.service.UserService;
import com.nutriometer.service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import static com.nutriometer.model.User.Role.ADMIN;
import static com.nutriometer.model.User.Role.USER;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/food")
public class FoodApiController {

    @Autowired
    private FoodService foodService;


    @Role({ADMIN, USER})
    @GetMapping("/{foodname}")
    private Food getFood(@PathVariable String foodname){
        return foodService.findbyfoodName(foodname);
    }


}
