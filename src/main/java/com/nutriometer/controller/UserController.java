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
    public String index(Model model) {
        //model.addAttribute("user", new User());
        return "index";
    }
    @GetMapping("/register")
    public String registerGet(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }
    @GetMapping("/greeting")
    public String greeting(Model model){

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