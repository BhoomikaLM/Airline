package com.udaan.airline.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udaan.airline.model.Register;
import com.udaan.airline.repository.RegisterRepository;
import com.udaan.airline.service.RegisterService;

@Service
public class RegisterServiceImpl implements RegisterService {
	
	@Autowired
	private RegisterRepository repo;
	
	@Override
	public String saveRegister(Register r) {
		r = repo.save(r);
		return r.getEmail();
	}
	
	@Override
	public boolean isRegisterExist(String email) {
		return repo.existsById(email);
	}
	
	@Override
	public void deleteRegister(String email) {
		repo.deleteById(email);
	}
	
	@Override
	public Optional<Register> getOneRegister(String email) {
		return repo.findById(email);
	}
	
	@Override
	public  List<Register> getAllRegister() {
		return repo.findAll();
	}

}















