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
    public String login(Model model) {
        model.addAttribute(new User());
        return "index";
    }

    @PostMapping("/index")
    public String login(@ModelAttribute User user, Model model) {
        if (userService.isValid(user)) {
            return redirectToGreeting(user);
        }
        model.addAttribute("loginFailed", true);
        return "index";
    }

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user) {
        user.setRole(USER);
        userService.register(user);

        return redirectToGreeting(user);
    }

    private String redirectToGreeting(@ModelAttribute User user) {
        return "redirect:/user/greet?name=" + user.getUsername();
    }
}