package com.sparkinnovators.RestoFurn.Service;

import com.sparkinnovators.RestoFurn.Entity.Employee;
import com.sparkinnovators.RestoFurn.Entity.User;
import com.sparkinnovators.RestoFurn.repository.EmployeeRepository;
import com.sparkinnovators.RestoFurn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    private UserRepository userRepository;

    public Employee authenticate(String email, String password) {
        Employee employee = employeeRepository.findByEmail(email);
        if (employee != null && employee.getPassword().equals(password)) {
            return employee;
        }
        return null;
    }
}

