package com.nutriometer.api;

import com.nutriometer.model.User;
import com.nutriometer.repository.UserRepository;
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
@RequestMapping("/api/user")
public class UserApiController {

    @Autowired
    private UserService userService;

    @Autowired
    UserRepository userRepository;




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
        System.out.println("POST OKKKK");
        return ResponseEntity.ok(userService.register(user));
    }

    //@Role({ADMIN, USER})
    @GetMapping("/{username}")
    private User getUser(@PathVariable String username){
        System.out.println("/api/user -> GET: " + username);
        return userRepository.findByUsername(username);
    }
}
