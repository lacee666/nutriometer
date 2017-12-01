package com.nutriometer.repository;

import com.nutriometer.model.Diary;
import com.nutriometer.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface DiaryRepository extends CrudRepository<Diary, Long> {

    //@Query(value = "select diary from users where username= :uname")
    Optional<ArrayList<Diary>> findByUsername(String username);
}
