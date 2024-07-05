package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistration {
    private String fName;
    private String lName;
    private String email;
    private String password;
    private String cpassword;

    @Override
    public String toString() {
        return "UserRegistration{" +
                "fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", email=" + email +
                ", password=" + password +
                ", cpassword='" + cpassword + '\'' +
                '}';
    }
}
