package com.sparkinnovators.RestoFurn.repository;

import com.sparkinnovators.RestoFurn.Entity.Employee;
import com.sparkinnovators.RestoFurn.Entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
}
