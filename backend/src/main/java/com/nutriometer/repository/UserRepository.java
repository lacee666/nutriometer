package com.nutriometer.repository;

import com.nutriometer.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String email);

    User findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);

}