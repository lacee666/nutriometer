package com.nutriometer.service;


import com.nutriometer.model.Diary;
import com.nutriometer.model.Recipe;
import com.nutriometer.repository.DiaryRepository;
import com.nutriometer.repository.UserRepository;
import com.nutriometer.model.User;
import com.nutriometer.service.exceptions.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;

import static com.nutriometer.model.User.Role.USER;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DiaryRepository diaryRepository;

    private User user;
    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername());
        }
        throw new UserNotValidException();
    }

    public User register(User user) throws UserNotValidException {
        if(user.getPassword().length() < 6){
            throw new UserNotValidException();
        }
        user.setRole(USER);
        /*
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        */

        userRepository.save(user);
        return user;
    }

    public boolean isValid(User user) {
        /*
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String pwd = userRepository.findByUsername(user.getUsername()).getPassword();
        return userRepository.findByUsername(user.getUsername()) != null && encoder.matches(user.getPassword(), pwd);
        */
        return userRepository.findByUsername(user.getUsername()) != null && user.getPassword().equals(userRepository.findByUsername(user.getUsername()).getPassword());
    }

    // adding a new daily intake(diary)
    public Diary saveDiary(Diary newDiary, String username){
        System.out.println("Err elott.");
        System.out.println("Found username, adding diary to it. Details: " + this.user.getUsername() + " // " + this.user.getPassword());
        newDiary.setDate(new Timestamp(System.currentTimeMillis()).toString());
        newDiary.setUsername(username);
        this.user.diary.add(newDiary);
        System.out.println("Diary added to user: " + this.user.getDiary().toString());
        System.out.println("Saving diary...");
        return diaryRepository.save(this.user.getDiary().get(this.user.getDiary().size() - 1));
    }
    public ArrayList<Diary> getDiary(String username){
        return diaryRepository.findByUsername(username).get();
    }
    public void addToRecipes(Recipe newRecipe){
        user.recipes.add(newRecipe);
        userRepository.save(user);
    }
    public boolean isLoggedIn() {
        return user != null;
    }

    public User getUser(){
        return user;
    }
    public UserRepository getUserRepository(){
        return userRepository;
    }
}

