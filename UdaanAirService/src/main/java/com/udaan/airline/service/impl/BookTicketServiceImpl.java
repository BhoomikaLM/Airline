package com.udaan.airline.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udaan.airline.model.BookTicket;
import com.udaan.airline.repository.BookTicketRepository;
import com.udaan.airline.service.BookTicketService;

@Service
public class BookTicketServiceImpl implements BookTicketService {
	
	@Autowired
	private BookTicketRepository repo;
	
	@Override
	public String saveBookTicket(BookTicket b) {
		b = repo.save(b);
		return b.getEmail();
	}

	@Override
	public void updateBookTicket(BookTicket b) {
		repo.save(b);
	}

	@Override
	public void deleteBookTicket(String email) {
		repo.deleteById(email);
	}

	@Override
	public Optional<BookTicket> getOneBookTicket(String email) {
		return repo.findById(email);
	}

	@Override
	public List<BookTicket> getAllBookTicket() {
		return repo.findAll();
	}

	@Override
	public boolean isBookTicketExist(String email) {
		return repo.existsById(email);
	}

}