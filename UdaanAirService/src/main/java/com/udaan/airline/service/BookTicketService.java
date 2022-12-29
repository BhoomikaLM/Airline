package com.udaan.airline.service;

import java.util.List;
import java.util.Optional;
import com.udaan.airline.model.BookTicket;


public interface BookTicketService {
	String saveBookTicket(BookTicket b);
	void updateBookTicket(BookTicket b);
	void deleteBookTicket(String email);
	Optional<BookTicket> getOneBookTicket(String email);
	List<BookTicket> getAllBookTicket();
	boolean isBookTicketExist(String email);
}
