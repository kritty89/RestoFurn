package com.sparkinnovators.RestoFurn.model;

import com.sparkinnovators.RestoFurn.Entity.Order;
import com.sparkinnovators.RestoFurn.Entity.OrderItem;
import com.sparkinnovators.RestoFurn.Entity.Transaction;
import com.sparkinnovators.RestoFurn.Entity.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class OrderRequest {
    private Order order;
    private List<OrderItem> orderItems;
    private Transaction transaction;
    private User user;
}
