package com.sparkinnovators.RestoFurn.repository;

import com.sparkinnovators.RestoFurn.Entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    Employee findByEmail(String email);
}
