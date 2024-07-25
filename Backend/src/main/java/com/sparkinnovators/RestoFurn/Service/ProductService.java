package com.sparkinnovators.RestoFurn.Service;

import com.sparkinnovators.RestoFurn.Entity.Product;
import com.sparkinnovators.RestoFurn.model.ProductFilter;
import com.sparkinnovators.RestoFurn.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sparkinnovators.RestoFurn.specification.ProductSpecification;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private final ProductRepository productRepository;

    public Product getProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getFilteredProducts(ProductFilter filter) {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .filter(p -> filter.getMaterial() == null || p.getMaterial().equals(filter.getMaterial()))
                .filter(p -> filter.getMinPrice() == null || p.getPrice() >= filter.getMinPrice())
                .filter(p -> filter.getMaxPrice() == null || p.getPrice() <= filter.getMaxPrice())
                .filter(p -> filter.getFurnitureType() == null || p.getFurnitureType().equals(filter.getFurnitureType()))
                .collect(Collectors.toList());
    }
}
