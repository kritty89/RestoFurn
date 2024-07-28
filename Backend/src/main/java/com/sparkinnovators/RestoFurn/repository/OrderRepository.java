package com.sparkinnovators.RestoFurn.repository;

import com.sparkinnovators.RestoFurn.Entity.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
}
