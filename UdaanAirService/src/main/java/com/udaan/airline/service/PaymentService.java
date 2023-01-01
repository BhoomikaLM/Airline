package com.udaan.airline.service;

import java.util.List;
import java.util.Optional;
import com.udaan.airline.model.Payment;

public interface PaymentService {
	String savePayment(Payment p);
	void updatePayment(Payment p);
	void deletePayment(String card_num);
	Optional<Payment> getOnePayment(String card_num);
	List<Payment> getAllPayment();
	boolean isPaymentExist(String card_num);

}
