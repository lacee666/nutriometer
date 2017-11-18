package com.nutriometer.controller;

import com.nutriometer.service.UserService;
import com.nutriometer.service.annotations.Role;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.*;
import  com.nutriometer.model.User;

import javax.servlet.http.HttpServletRequest;

import static com.nutriometer.model.User.Role.USER;

@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;

    @Role
    @PostMapping("/login")
    public User login(HttpServletRequest request, @RequestBody User user) throws UserNotValidException {
        return userService.login(user);
    }

    @PostMapping("/register")
    public void register(@ModelAttribute User user, Model model) {
        userService.register(user);
    }

}