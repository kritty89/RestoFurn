package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserData {
    private String email;
    private String password;
    private String id;

    @Override
    public String toString() {
        return "EmployeeData{" +
                ", email=" + email + '\'' +
                ", password=" + password +
                '}';
    }
}
