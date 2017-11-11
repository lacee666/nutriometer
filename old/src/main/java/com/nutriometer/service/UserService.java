package com.nutriometer.service;


import com.nutriometer.repository.UserRepository;
import com.nutriometer.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void register(User user){
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
}

