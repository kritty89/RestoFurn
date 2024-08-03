package com.sparkinnovators.RestoFurn.Service;

import com.sparkinnovators.RestoFurn.Entity.*;
import com.sparkinnovators.RestoFurn.model.OrderRequest;
import com.sparkinnovators.RestoFurn.model.UserData;
import com.sparkinnovators.RestoFurn.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private UserRepository userRepository;

    public Order createOrderWithTransaction(OrderRequest orderRequest, UserData userData) {
        // Fetch the User entity from the repository
        User user = userRepository.findById(userData.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Create and populate Order entity
        Order order = new Order();
        order.setUser(user);

        // Save Order to repository
        return orderRepository.save(order);
    }
}
