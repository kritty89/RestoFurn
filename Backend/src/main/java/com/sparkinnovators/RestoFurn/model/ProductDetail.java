package com.sparkinnovators.RestoFurn.model;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProductDetail {
    private Long id;
    private String furnitureName;
    private String furnitureType;
    private String material;
    private Double price;
    private String furnitureStatus;
    private String inStock;
    private String coverImage;
    private String description;

    @Override
    public String toString() {
        return "ProductDetail{" +
                "id=" + id + '\'' +
                "furnitureName=" + furnitureName + '\'' +
                "furnitureType=" + furnitureType + '\'' +
                "material=" + material + '\'' +
                "price=" + price + '\'' +
                "furnitureStatus=" + furnitureStatus + '\'' +
                "inStock=" + inStock + '\'' +
                "coverImage=" + coverImage + '\'' +
                "description=" + description +
                '}';
    }
}

