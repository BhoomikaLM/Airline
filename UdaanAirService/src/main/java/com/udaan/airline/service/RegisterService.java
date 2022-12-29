package com.udaan.airline.service;

import java.util.List;
import java.util.Optional;
import com.udaan.airline.model.Register;

public interface RegisterService {
	String saveRegister(Register l);
	//List<Register>getAllRegister();
	void deleteRegister(String email);
	boolean isRegisterExist(String email);
    List<Register> getAllRegister();
    Optional<Register> getOneRegister(String email);
}


