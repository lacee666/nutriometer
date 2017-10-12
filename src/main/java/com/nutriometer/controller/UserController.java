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
        model.addAttribute("user", new User());
        return "index";
    }
    @GetMapping("/register")
    public String registerGet(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute User user, Model model) {
       /* if (userService.isValid(user)) {
            return redirectToGreeting(user);
        }*/
        return "greeting";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user) {
        user.setRole(USER);
        userService.register(user);

        return "greeting";
    }

    private String redirectToGreeting(@ModelAttribute User user) {
        return "redirect:/greeting?name=" + user.getUsername();
    }
}