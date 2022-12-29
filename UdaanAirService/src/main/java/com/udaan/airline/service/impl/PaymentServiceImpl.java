package com.udaan.airline.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udaan.airline.model.Payment;
import com.udaan.airline.repository.PaymentRepository;
import com.udaan.airline.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {
	@Autowired
	private PaymentRepository repo;
	
	@Override
	public Long savePayment(Payment f) {
		f = repo.save(f);
		return f.getCard_num();
	}

	@Override
	public void updatePayment(Payment f) {
		repo.save(f);
	}

	@Override
	public void deletePayment(Long card_num) {
		repo.deleteById(card_num);
	}

	@Override
	public Optional<Payment> getOnePayment(Long card_num) {
		return repo.findById(card_num);
	}

	@Override
	public List<Payment> getAllPayment() {
		return repo.findAll();
	}

	@Override
	public boolean isPaymentExist(Long card_num) {
		return repo.existsById(card_num);
	}
}