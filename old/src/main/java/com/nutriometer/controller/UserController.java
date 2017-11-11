package com.nutriometer.controller;

import com.nutriometer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import  com.nutriometer.model.User;
import static com.nutriometer.model.User.Role.USER;

@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/index")
    public String index() {
        return "index";
    }
    @GetMapping("/recipesearch")
    public String recipeSearch() {
        return "recipesearch";
    }
    @GetMapping("/register")
    public String registerGet(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }
    @GetMapping("/contact")
    public String contact(Model model) {
        model.addAttribute("user", new User());
        return "contact";
    }
    @GetMapping("/greeting/{name}")
    public String greeting(){
        return "greeting";
    }
    @GetMapping("/login/{name}")
    public String login(){
        return "greeting";
    }


    @PostMapping("/login")
    public String login(@ModelAttribute User user, Model model) {
        if (userService.isValid(user)) {
            return "greeting";
        }
        model.addAttribute("loginFailed", true);
        return "register";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user, Model model) {
        user.setRole(USER);
        try{
            userService.register(user);
        } catch(Exception e){
            model.addAttribute("registerFailed", true);
            return "register";
        }
        return "greeting";
    }

    private String redirectToGreeting(@ModelAttribute User user) {
        return "redirect:greeting?username=" + user.getUsername();
    }
}