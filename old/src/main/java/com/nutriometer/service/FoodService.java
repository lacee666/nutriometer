package com.nutriometer.service;

import com.nutriometer.model.Food;
import com.nutriometer.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;

    public Food findbyfoodName(String name) {
        return foodRepository.findByName(name);
    }


}
