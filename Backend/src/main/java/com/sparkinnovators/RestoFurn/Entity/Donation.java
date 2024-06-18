package com.sparkinnovators.RestoFurn.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table (name="donation")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "address", nullable = false)
    private String address;
    @Column(name = "phoneNumber", nullable = false, unique = true)
    private Integer phoneNumber;
    @Column(name = "furnitureCount", nullable = false)
    private Integer furnitureCount;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "pickupDate")
    private Date pickupDate;
    @Column(name = "pickupTime")
    private Date pickupTate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

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

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public Date getPickupDate() {
        return pickupDate;
    }

    public void setPickupDate(Date pickupDate) {
        this.pickupDate = pickupDate;
    }

    public Date getPickupTate() {
        return pickupTate;
    }

    public void setPickupTate(Date pickupTate) {
        this.pickupTate = pickupTate;
    }
}

