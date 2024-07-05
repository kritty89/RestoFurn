package com.sparkinnovators.RestoFurn.controller;

import com.sparkinnovators.RestoFurn.Entity.Donation;
import com.sparkinnovators.RestoFurn.Entity.User;
import com.sparkinnovators.RestoFurn.model.DonationRequest;
import com.sparkinnovators.RestoFurn.model.UserRegistration;
import com.sparkinnovators.RestoFurn.repository.DonationRepository;
import com.sparkinnovators.RestoFurn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/restofurn")
public class UserController {

    private final DonationRepository donationRepository;
    private final UserRepository userRepository;

    @Autowired
    public UserController(final DonationRepository donationRepository, UserRepository userRepository){
        this.donationRepository=donationRepository;
        this.userRepository = userRepository;
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
        }else{
            System.out.println("Registration not success " );
        }
        return ResponseEntity.ok("OK");

    }

}
