package com.sparkinnovators.RestoFurn.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
}

