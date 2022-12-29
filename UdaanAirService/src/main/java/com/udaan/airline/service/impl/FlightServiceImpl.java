package com.udaan.airline.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udaan.airline.model.Flight;
import com.udaan.airline.repository.FlightRepository;
import com.udaan.airline.service.FlightService;

@Service
public class FlightServiceImpl implements FlightService {
	@Autowired
	private FlightRepository repo;
	
	@Override
	public Integer saveFlight(Flight f) {
		f = repo.save(f);
		return f.getFlight_id();
	}

	@Override
	public void updateFlight(Flight f) {
		repo.save(f);
	}

	@Override
	public void deleteFlight(Integer flight_id) {
		repo.deleteById(flight_id);
	}

	@Override
	public Optional<Flight> getOneFlight(Integer flight_id) {
		return repo.findById(flight_id);
	}

	@Override
	public List<Flight> getAllFlight() {
		return repo.findAll();
	}

	@Override
	public boolean isFlightExist(Integer flight_id) {
		return repo.existsById(flight_id);
	}

}
