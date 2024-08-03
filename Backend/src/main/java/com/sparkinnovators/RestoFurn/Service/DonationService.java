package com.sparkinnovators.RestoFurn.Service;

import com.sparkinnovators.RestoFurn.Entity.Donation;
import com.sparkinnovators.RestoFurn.model.DonationRequest;
import com.sparkinnovators.RestoFurn.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DonationService {
    @Autowired
    private DonationRepository donationRepository;

    public Donation updateDonation(Long id, DonationRequest donationDetails) {
        Optional<Donation> optionalDonation = donationRepository.findById(id);
        if (optionalDonation.isPresent()) {
            Donation donation = optionalDonation.get();
            donation.setName(donationDetails.getName());
            donation.setEmailId(donationDetails.getEmail());
            donation.setFurnitureCount(donationDetails.getFurnitureCount());
            donation.setStatus(donationDetails.getStatus());
            return donationRepository.save(donation);
        } else {
            throw new RuntimeException("Donation not found with id " + id);
        }
    }

    public void deleteDonation(Long id) {
        if (donationRepository.existsById(id)) {
            donationRepository.deleteById(id);
        } else {
            throw new RuntimeException("Donation not found with id " + id);
        }
    }
}
