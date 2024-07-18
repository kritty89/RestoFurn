package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeData {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String password;
    private String role;

    @Override
    public String toString() {
        return "UserRegistration{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email=" + email + '\'' +
                ", phone=" + phone + '\'' +
                ", role=" + role + '\'' +
                ", password=" + password +
                '}';
    }
}
