package com.nutriometer.api;

import com.nutriometer.model.Recipe;
import com.nutriometer.model.User;
import com.nutriometer.repository.UserRepository;
import com.nutriometer.service.FoodService;
import com.nutriometer.service.RecipeService;
import com.nutriometer.service.UserService;
import com.nutriometer.service.annotations.Role;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static com.nutriometer.model.User.Role.ADMIN;
import static com.nutriometer.model.User.Role.USER;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/food")
public class RecipeApiController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    UserRepository userRepository;
    @Role({ADMIN, USER})
    @PostMapping
    private ResponseEntity<Recipe> create(@RequestBody Recipe recipe) {
        //recipe.setUser(userService.getUserRepository().findByUsername(userService.getUser().getUsername()));
        Recipe saved = recipeService.create(recipe);
        return ResponseEntity.ok(saved);
    }

    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private User read(@PathVariable String id){
        return userRepository.findByUsername(id);
    }
}