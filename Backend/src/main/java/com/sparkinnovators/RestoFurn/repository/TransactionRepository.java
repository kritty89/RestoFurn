package com.sparkinnovators.RestoFurn.repository;
import com.sparkinnovators.RestoFurn.Entity.Transaction;
import org.springframework.data.repository.CrudRepository;

public interface TransactionRepository extends CrudRepository<Transaction, Long>{
}
