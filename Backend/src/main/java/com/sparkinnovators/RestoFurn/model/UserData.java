package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserData {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Long phone;
    private String password;
    private String city;
    private String streetAddress;
    private String state;
    private String country;
    private String postalCode;

    @Override
    public String toString() {
        return "UserRegistration{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email=" + email + '\'' +
                ", phone=" + phone + '\'' +
                ", password=" + password +
                '}';
    }
}
