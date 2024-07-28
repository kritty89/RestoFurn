package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeData {
    private String email;
    private String password;

    @Override
    public String toString() {
        return "EmployeeData{" +
                ", email=" + email + '\'' +
                ", password=" + password +
                '}';
    }
}
