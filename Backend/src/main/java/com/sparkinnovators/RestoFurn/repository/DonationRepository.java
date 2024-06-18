package com.sparkinnovators.RestoFurn.repository;

import com.sparkinnovators.RestoFurn.Entity.Donation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepository extends CrudRepository<Donation, Long> {
}
