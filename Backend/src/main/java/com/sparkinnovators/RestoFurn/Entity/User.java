package com.sparkinnovators.RestoFurn.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table (name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "firstName", nullable = false)
    private String firstName;
    @Column(name = "lastName", nullable = false)
    private String lastName;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "phone", nullable = false, unique = true)
    private Long phone;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "streetAddress", nullable = false)
    private String streetAddress;
    @Column(name = "city", nullable = false)
    private String city;
    @Column(name = "postalCode", nullable = false)
    private String postalCode;
    @Column(name = "state", nullable = false)
    private String state;
    @Column(name = "country", nullable = false)
    private String country;


    @OneToMany(mappedBy = "user")
    private List<Order> orders;
}
