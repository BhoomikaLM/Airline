package com.udaan.airline.util;

import org.springframework.stereotype.Component;

import com.udaan.airline.model.Payment;

@Component
public class PaymentUtil {
	public void mapToActualObject(Payment actual, Payment PaymentService) {

		actual.setCard(PaymentService.getCard());
		actual.setAmount(PaymentService.getAmount());
		actual.setName(PaymentService.getName());
		actual.setCard_num(PaymentService.getCard_num());
		actual.setExp_date(PaymentService.getExp_date());
		actual.setCvv(PaymentService.getCvv());
	}
}
