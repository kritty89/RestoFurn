package com.sparkinnovators.RestoFurn.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProductFilter {
    private String material;
    private Double minPrice;
    private Double maxPrice;
    private String furnitureType;
}
