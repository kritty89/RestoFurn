package com.sparkinnovators.RestoFurn.Entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;
    @Column(name = "type")
    private String type;
    @Column(name = "material")
    private String material;
    @Column(name = "price")
    private Double price;
    @Column(name = "status")
    private String status;
    @Column(name = "inStock")
    private Date inStock;
    @Column(name = "coverImage")
    private Date coverImage;
}
