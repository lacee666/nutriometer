package com.nutriometer.repository;
import com.nutriometer.model.Food;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//import java.util.Optional;

@Repository
public interface FoodRepository extends CrudRepository<Food, String> {
    Food findByName(String foodname);
}
