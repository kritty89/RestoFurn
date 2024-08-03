package com.sparkinnovators.RestoFurn.repository;

import com.sparkinnovators.RestoFurn.Entity.OrderItem;
import org.springframework.data.repository.CrudRepository;

public interface OrderItemRepository extends CrudRepository<OrderItem, Long> {
}
