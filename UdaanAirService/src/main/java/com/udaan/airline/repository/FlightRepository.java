package com.udaan.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.udaan.airline.model.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

}
