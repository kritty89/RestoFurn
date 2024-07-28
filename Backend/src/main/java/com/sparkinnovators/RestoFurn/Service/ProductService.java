package com.sparkinnovators.RestoFurn.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.sparkinnovators.RestoFurn.Entity.Product;
import com.sparkinnovators.RestoFurn.exception.ResourceNotFoundException;
import com.sparkinnovators.RestoFurn.model.ProductFilter;
import com.sparkinnovators.RestoFurn.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private Cloudinary cloudinary;

    @Autowired
    public ProductService(Cloudinary cloudinary, ProductRepository productRepository) {
        this.productRepository = productRepository;
        this.cloudinary = cloudinary;
    }

    public Product getProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public String uploadImageToCloudinary(MultipartFile imageFile) throws IOException {
        Map uploadResult = cloudinary.uploader().upload(imageFile.getBytes(), ObjectUtils.emptyMap());
        return (String) uploadResult.get("url");
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

    public Product updateProduct(Long id, Product product) {
        Product existingProduct = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        existingProduct.setFurnitureName(product.getFurnitureName());
        existingProduct.setFurnitureType(product.getFurnitureType());
        existingProduct.setMaterial(product.getMaterial());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setFurnitureStatus(product.getFurnitureStatus());
        existingProduct.setInStock(product.getInStock());
        existingProduct.setCoverImage(product.getCoverImage());
        existingProduct.setDescription(product.getDescription());
        return productRepository.save(existingProduct);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
