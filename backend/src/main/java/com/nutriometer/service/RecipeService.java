package com.nutriometer.service;

import com.nutriometer.model.Recipe;
import com.nutriometer.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    public Recipe findbyfoodName(String name) {
        return recipeRepository.findByName(name);
    }

    public Recipe create(Recipe recipe){
        recipe.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
        return recipeRepository.save(recipe);
    }
    public Recipe update(int id, Recipe issue) {
        Recipe recipe = recipeRepository.findOne(id);
        recipe.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));
        return recipeRepository.save(recipe);
    }

    public Recipe read(int id) {
        return recipeRepository.findOne(id);
    }
}
