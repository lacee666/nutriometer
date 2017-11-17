package com.nutriometer.repository;

import com.nutriometer.model.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, String> {
    Recipe findByName(String foodname);
}
