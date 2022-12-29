package com.udaan.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.udaan.airline.model.BookTicket;

import antlr.collections.List;

public interface BookTicketRepository extends JpaRepository<BookTicket, String>{
}
