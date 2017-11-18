package com.nutriometer.service;

import com.nutriometer.model.Recipe;
import com.nutriometer.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    public Recipe findbyfoodName(String name) {
        return recipeRepository.findByName(name);
    }



}
