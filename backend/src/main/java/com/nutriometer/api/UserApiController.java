package com.nutriometer.api;

import com.nutriometer.model.User;
import com.nutriometer.service.UserService;
import com.nutriometer.service.annotations.Role;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static com.nutriometer.model.User.Role.ADMIN;
import static com.nutriometer.model.User.Role.USER;

@RestController
@RequestMapping("/api/user")
public class UserApiController {

    private final UserService userService;

    @Autowired
    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @Role({USER,ADMIN})
    @GetMapping
    public ResponseEntity<User> user() {
        if (userService.isLoggedIn()) {
            return ResponseEntity.ok(userService.getUser());
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.login(user));
        } catch (UserNotValidException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.ok(userService.register(user));
    }
}
