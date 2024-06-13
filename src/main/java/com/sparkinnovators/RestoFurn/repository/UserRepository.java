package com.sparkinnovators.RestoFurn.repository;

import com.sparkinnovators.RestoFurn.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}