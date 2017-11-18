package com.nutriometer.api;

import com.nutriometer.model.User;
import com.nutriometer.service.FoodService;
import com.nutriometer.service.UserService;
import com.nutriometer.service.annotations.Role;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static com.nutriometer.model.User.Role.ADMIN;
import static com.nutriometer.model.User.Role.USER;

@RestController
@RequestMapping("/api/food")
public class FoodApiController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;


}
