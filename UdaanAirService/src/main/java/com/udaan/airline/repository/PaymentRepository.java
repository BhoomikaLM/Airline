package com.udaan.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.udaan.airline.model.Payment;

public interface PaymentRepository  extends JpaRepository<Payment, Long>{

}
