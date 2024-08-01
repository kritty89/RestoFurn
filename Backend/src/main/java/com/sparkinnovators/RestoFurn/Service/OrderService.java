package com.sparkinnovators.RestoFurn.Service;

import com.sparkinnovators.RestoFurn.Entity.Order;
import com.sparkinnovators.RestoFurn.Entity.Transaction;
import com.sparkinnovators.RestoFurn.repository.OrderRepository;
import com.sparkinnovators.RestoFurn.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final TransactionRepository transactionRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, TransactionRepository transactionRepository) {
        this.orderRepository = orderRepository;
        this.transactionRepository = transactionRepository;
    }

    public Order createOrderWithTransaction(Order order, Transaction transaction) {
        Order savedOrder = orderRepository.save(order);
        transaction.setOrder(savedOrder);
        transactionRepository.save(transaction);

        return savedOrder;
    }
}
