package com.sparkinnovators.RestoFurn.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Entity
@Table (name="donation")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "streetAddress", nullable = false)
    private String streetAddress;
    @Column(name = "city", nullable = false)
    private String city;
    @Column(name = "state", nullable = false)
    private String state;
    @Column(name = "country", nullable = false)
    private String country;
    @Column(name = "postalCode", nullable = false)
    private String postalCode;
    @Column(name = "phoneNumber", nullable = false)
    private Long phoneNumber;
    @Column(name = "emailId", nullable = false)
    private String emailId;
    @Column(name = "furnitureCount", nullable = false)
    private Integer furnitureCount;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "pickupDateTime")
    private Date pickupDateTime;
    @Column(name = "status")
    private String status;
}

