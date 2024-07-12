package com.sparkinnovators.RestoFurn.controller;

import com.sparkinnovators.RestoFurn.Entity.Donation;
import com.sparkinnovators.RestoFurn.Entity.Product;
import com.sparkinnovators.RestoFurn.Entity.User;
import com.sparkinnovators.RestoFurn.model.DonationRequest;
import com.sparkinnovators.RestoFurn.model.ProductDetail;
import com.sparkinnovators.RestoFurn.model.UserRegistration;
import com.sparkinnovators.RestoFurn.repository.DonationRepository;
import com.sparkinnovators.RestoFurn.repository.ProductRepository;
import com.sparkinnovators.RestoFurn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/restofurn")
public class UserController {

    private final DonationRepository donationRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    @Autowired
    public UserController(final DonationRepository donationRepository, UserRepository userRepository,
                          ProductRepository productRepository){
        this.donationRepository=donationRepository;
        this.userRepository = userRepository;
        this.productRepository=productRepository;
    }

    @PostMapping(value="/donation")
    public ResponseEntity<String> processDonationDetail(@RequestBody final DonationRequest donationRequest){
        if(null != donationRequest){
            System.out.println("donationRequest :: " + donationRequest.toString());
            Donation donationEntity = new Donation();
            donationEntity.setName(donationRequest.getName());
            donationEntity.setAddress(donationRequest.getAddress());
            donationEntity.setPhoneNumber(donationRequest.getContact());
            donationEntity.setFurnitureCount(donationRequest.getFurnitureCount());
            donationEntity.setDescription(donationRequest.getDescription());
            donationEntity.setPickupDate(new Date());
            donationEntity.setPickupDate(new Date());

            donationRepository.save(donationEntity);
        }else{
            System.out.println("donationRequest not success " );
        }
        return ResponseEntity.ok("OK");

    }

    @PostMapping(value="/register")
    public ResponseEntity<String> processRegisterDetail(@RequestBody final UserRegistration userRegistration){
        if(null != userRegistration){
            System.out.println("userRegistration :: " + userRegistration.toString());
            User userEntity = new User();
            userEntity.setFirstName(userRegistration.getFirstName());
            userEntity.setLastName(userRegistration.getLastName());
            userEntity.setEmail(userRegistration.getEmail());
            userEntity.setPassword(userRegistration.getPassword());
            userRepository.save(userEntity);

            List<Product> productList = (List<Product>) productRepository.findAll();
        }else{
            System.out.println("Registration not success " );
        }
        return ResponseEntity.ok("OK");

    }

    @PostMapping(value="/products")
    public ResponseEntity<List<ProductDetail>> processProductDetail(@RequestBody String data){
        List<Product> productList = (List<Product>) productRepository.findAll();
        List<ProductDetail> pdList = new ArrayList<>();
        if(!productList.isEmpty()){

            for( Product p : productList){
              ProductDetail pd = new ProductDetail();

              pd.setFurnitureName(p.getFurnitureName());
              pd.setFurnitureType(p.getFurnitureType());
              pd.setMaterial(p.getMaterial());
              pd.setPrice(p.getPrice());
              pd.setFurnitureStatus(p.getFurnitureStatus());
              pd.setInStock(p.getInStock());
              pd.setCoverImage(p.getCoverImage());
              pd.setDescription(p.getDescription());

              pdList.add(pd);
            }
        }
        System.out.println(" success " + pdList.size());
        return ResponseEntity.ok(pdList);

    }

}
