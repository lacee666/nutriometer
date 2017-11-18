package com.nutriometer.service;


import com.nutriometer.repository.UserRepository;
import com.nutriometer.model.User;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static com.nutriometer.model.User.Role.USER;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private User user;
    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername());
        }
        throw new UserNotValidException();
    }

    public void register(User user){
        user.setRole(USER);
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }

    public boolean isValid(User user) {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String pwd = userRepository.findByUsername(user.getUsername()).getPassword();
        return userRepository.findByUsername(user.getUsername()) != null && encoder.matches(user.getPassword(), pwd);
    }

    public boolean isLoggedIn() {
        return user != null;
    }

    public User getUser(){
        return user;
    }
}

