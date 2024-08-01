package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class DonationRequest {
    private Long id;
    private String name;
    private String streetAddress;
    private String city;
    private String postalCode;
    private String state;
    private String country;
    private Long phone;
    private String email;
    private Integer furnitureCount;
    private String description;
    private Date pickupDateTime;
    private String status;

    @Override
    public String toString() {
        return "DonationRequest{" +
                "name='" + name + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", phone=" + phone + '\'' +
                ", email=" + email + '\'' +
                ", furnitureCount=" + furnitureCount +'\'' +
                ", description='" + description +
                '}';
    }
}
