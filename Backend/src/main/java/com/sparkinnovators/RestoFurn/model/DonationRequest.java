package com.sparkinnovators.RestoFurn.model;

import java.util.Date;

public class DonationRequest {
    private String name;
    private String address;
    private Integer contact;
    private Integer furnitureCount;
    private String description;
    // private Date pickupDate;
    //private Date pickupTate;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getContact() {
        return contact;
    }

    public void setContact(Integer contact) {
        this.contact = contact;
    }

    public Integer getFurnitureCount() {
        return furnitureCount;
    }

    public void setFurnitureCount(Integer furnitureCount) {
        this.furnitureCount = furnitureCount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "DonationRequest{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", contact=" + contact +
                ", furnitureCount=" + furnitureCount +
                ", description='" + description + '\'' +
                '}';
    }
}
