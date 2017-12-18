package com.nutriometer.repository;

import com.nutriometer.model.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Long> {
    Recipe findByName(String recipeName);
    Iterable<Recipe> findByUsername(String username);
    Iterable<Recipe> findAll();
}
