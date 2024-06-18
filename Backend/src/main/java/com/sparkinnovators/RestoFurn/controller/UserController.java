package com.sparkinnovators.RestoFurn.controller;

import com.sparkinnovators.RestoFurn.Entity.Donation;
import com.sparkinnovators.RestoFurn.model.DonationRequest;
import com.sparkinnovators.RestoFurn.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/restofurn")
public class UserController {

    private final DonationRepository donationRepository;

    @Autowired
    public UserController(final DonationRepository donationRepository){
        this.donationRepository=donationRepository;
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

}
