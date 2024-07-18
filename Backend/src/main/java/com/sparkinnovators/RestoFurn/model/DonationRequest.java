package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class DonationRequest {
    private String name;
    private String streetAddress;
    private String city;
    private String postalCode;
    private Long contact;
    private String emailId;
    private Integer furnitureCount;
    private String description;
    private Date pickupDateTime;
//    private Date pickupTate;

    @Override
    public String toString() {
        return "DonationRequest{" +
                "name='" + name + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", contact=" + contact + '\'' +
                ", email=" + emailId + '\'' +
                ", furnitureCount=" + furnitureCount +'\'' +
                ", description='" + description +
                '}';
    }
}
