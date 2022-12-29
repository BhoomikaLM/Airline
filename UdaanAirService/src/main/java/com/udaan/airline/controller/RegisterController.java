package com.udaan.airline.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.udaan.airline.model.Register;
import com.udaan.airline.repository.RegisterRepository;
import com.udaan.airline.service.RegisterService;
import com.udaan.airline.util.RegisterUtil;

@RestController
@RequestMapping("/rest/register")
@CrossOrigin(origins = "http://localhost:4200")

public class RegisterController {
	private Logger log = LoggerFactory.getLogger(RegisterController.class);

	@Autowired
	private RegisterService service;
	@Autowired
	private RegisterUtil util;
	@Autowired
	private RegisterRepository feed;
	
//	@Autowired
//	private JavaMailSender sender;
	
	//Insert or save User
	@PostMapping("/save")
	public ResponseEntity<String> saveRegister(
			@RequestBody Register register)
	{
		log.info("first_name=====>"+register.getFirst_name()+" password====>"+register.getFirst_name());
		System.out.println("name=====>"+register.getFirst_name()+" password====>"+register.getFirst_name());
		log.info("Entered into method with Airline data to save");
		ResponseEntity<String> resp = null;
		try {
			log.info("About to call save Operation");
			
			String name = service.saveRegister(register);
			log.debug("Airline saved with name" +name);
			
			String body = "Airline '"+name+"'created";
			
			resp = new ResponseEntity<String>(body, HttpStatus.CREATED);
			log.info("Success response constructed");
			 
			
		}
		
		catch (Exception e) {
			log.error("Unable to save Login : problem is :"+e.getMessage());
			resp =  new ResponseEntity<String>(
					"Unable to Create Airline", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		return resp;
		
	}

	
	@GetMapping("/all")
	public ResponseEntity<?> getAllRegister() {
		log.info("Entered into method to fetch Registered data");
		ResponseEntity<?> resp = null ;
		try {

			log.info("About to call fetch register service");
			List<Register> list = service.getAllRegister();
			if(list!=null && !list.isEmpty()) {
				log.info("Data is not empty=>"+list.size());
				list.sort((s1,s2)->s1.getFirst_name().compareTo(s2.getFirst_name()));
				/* JDK 1.8
				list = list.stream()
						.sorted((s1,s2)->s1.getName().compareTo(s2.getName()))
						.collect(Collectors.toList());
				 */
				resp = new ResponseEntity<List<Register>>(list, HttpStatus.OK);
			} else {
				log.info("No Registrations exist: size "+list.size());

				//resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);
				resp = new ResponseEntity<String>(
						"No Registrations Found",
						HttpStatus.OK);
			}
		} catch (Exception e) {
			log.error("Unable to fetch students : problem is :"+e.getMessage());

			resp =  new ResponseEntity<String>(
					"Unable to Fetch Registrations", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		log.info("About to Exist fetch all method with Response");
		return resp;
	}

	@GetMapping("/one/{email}")
	public ResponseEntity<?> getOneRegister(
			@PathVariable String email
			) 
	{
		log.info("Entered into Get one register method");
		ResponseEntity<?> resp = null;
		try {
			log.info("About to make service call to fetch one record");
			Optional<Register> opt =  service.getOneRegister(email);
			if(opt.isPresent()) {
				log.info("Email exists=>"+email);
				resp = new ResponseEntity<Register>(opt.get(), HttpStatus.OK);
				//resp = ResponseEntity.ok(opt.get());
			} else {
				log.warn("Given Registered email not exist=>"+email);
				resp = new ResponseEntity<String>(
						"Registered '"+ email +"' not exist", 
						HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error("Unable to process request fetch " + e.getMessage());
			resp = new ResponseEntity<String>(
					"Unable to process email fetch", 
					HttpStatus.INTERNAL_SERVER_ERROR);
			e.printStackTrace();
		}

		return resp;
	}
	
	// Delete User
	@DeleteMapping("/remove/{email}")
	public ResponseEntity<String> removeRegister(
			@PathVariable String email)
	{
		log.info("Entered into delete method");
		ResponseEntity<String> resp = null;

		try {

			log.info("About to make service call for data check");
			boolean exist = service.isRegisterExist(email);
			if(exist) {
				service.deleteRegister(email);
				log.info("Register exist with given email and deleted=>"+ email);
				resp = new ResponseEntity<String>(
						"Register '"+email+"' deleted",
						HttpStatus.OK);
			} else {
				log.warn("Given email not exist =>"+ email);
				resp = new ResponseEntity<String>(
						"Register '"+email+"' not exist",
						HttpStatus.BAD_REQUEST);
			}
		} catch (Exception e) {
			log.error("Unable to perform Delete Operation =>" + e.getMessage());
			resp = new ResponseEntity<String>(
					"Unable to delete", 
					HttpStatus.INTERNAL_SERVER_ERROR);
			e.printStackTrace();
		}

		return resp;
	}	
}

