package com.sparkinnovators.RestoFurn.specification;

import com.sparkinnovators.RestoFurn.Entity.Product;
import com.sparkinnovators.RestoFurn.model.ProductFilter;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ProductSpecification {
    public static Specification<Product> getProducts(ProductFilter filter) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (filter.getMaterial() != null) {
                predicates.add(criteriaBuilder.equal(root.get("material"), filter.getMaterial()));
            }

            if (filter.getMinPrice() != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), filter.getMinPrice()));
            }

            if (filter.getMaxPrice() != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), filter.getMaxPrice()));
            }

            if (filter.getFurnitureType() != null) {
                predicates.add(criteriaBuilder.equal(root.get("furnitureType"), filter.getFurnitureType()));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
