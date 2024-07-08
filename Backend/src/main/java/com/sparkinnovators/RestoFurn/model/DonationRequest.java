package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class DonationRequest {
    private String name;
    private String address;
    private Integer contact;
    private Integer furnitureCount;
    private String description;
    // private Date pickupDate;
    //private Date pickupTate;

    @Override
    public String toString() {
        return "DonationRequest{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", contact=" + contact + '\'' +
                ", furnitureCount=" + furnitureCount +'\'' +
                ", description='" + description +
                '}';
    }
}
