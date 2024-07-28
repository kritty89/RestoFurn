package com.sparkinnovators.RestoFurn.Entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "furnitureName")
    private String furnitureName;
    @Column(name = "furnitureType")
    private String furnitureType;
    @Column(name = "material")
    private String material;
    @Column(name = "price")
    private Double price;
    @Column(name = "furnitureStatus")
    private String furnitureStatus;
    @Column(name = "inStock")
    private String inStock;
    @Column(name = "coverImage")
    private String coverImage;
    @Column(name = "description")
    private String description;
    @OneToMany(mappedBy = "product")
    private List<Order> orders;
}
