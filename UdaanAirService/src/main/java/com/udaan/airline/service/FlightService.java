package com.udaan.airline.service;

import java.util.Optional;
import java.util.List;
import com.udaan.airline.model.Flight;

public interface FlightService {
	Integer saveFlight(Flight f);
	void updateFlight(Flight f);
	void deleteFlight(Integer flight_id);
	Optional<Flight> getOneFlight(Integer flight_id);
	List<Flight> getAllFlight();
	boolean isFlightExist(Integer flight_id);
}
