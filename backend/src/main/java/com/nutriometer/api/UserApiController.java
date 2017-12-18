package com.nutriometer.api;

import com.nutriometer.model.Diary;
import com.nutriometer.model.User;
import com.nutriometer.repository.UserRepository;
import com.nutriometer.service.FoodService;
import com.nutriometer.service.UserService;
import com.nutriometer.service.annotations.Role;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static com.nutriometer.model.User.Role.ADMIN;
import static com.nutriometer.model.User.Role.USER;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
public class UserApiController {

    @Autowired
    private FoodService foodService;
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
        System.out.println("Login...");
        try {
            return ResponseEntity.ok(userService.login(user));
        } catch (UserNotValidException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        System.out.println("Registering user...");
        try {
            return ResponseEntity.ok(userService.register(user));
        } catch (UserNotValidException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    //@Role({ADMIN, USER})
    @GetMapping("/{username}")
    private User getUser(@PathVariable String username){
        System.out.println("/api/user -> GET: " + username);
        return userRepository.findByUsername(username);
    }

    @PostMapping("/savediary/{username}")
    private ResponseEntity<Diary> saveDiary(@RequestBody Diary diary, @PathVariable String username){
        try {
            System.out.println("Return elott: " + username + " DIARY: " + diary.toString());
            return ResponseEntity.ok(userService.saveDiary(diary, username));
        }catch(Exception e){
            e.printStackTrace();
            System.out.println("WTF POST DIARY");
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/diary/{username}")
    private ResponseEntity<ArrayList<Diary>> getUserDiary(@PathVariable String username){
        try{
            System.out.println("GET DIARY FOR: " + username);
            return ResponseEntity.ok(userService.getDiary(username));
        }catch(Exception e){
            e.printStackTrace();
            System.out.println("WTF GET DIARY");
            return ResponseEntity.badRequest().build();
        }

    }
}
