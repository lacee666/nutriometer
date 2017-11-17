package com.nutriometer.service;


import com.nutriometer.repository.UserRepository;
import com.nutriometer.model.User;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private User user;
    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername()) /*.get()*/;
        }
        throw new UserNotValidException();
    }

    public User register(User user){
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
        return user;
    }

    public boolean isValid(User user) {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String pwd = userRepository.findByUsername(user.getUsername()).getPassword();

        return userRepository.findByUsername(user.getUsername()) != null && encoder.matches(user.getPassword(), pwd);
    }

    public boolean isLoggedIn() {
        return user != null;
    }
}

