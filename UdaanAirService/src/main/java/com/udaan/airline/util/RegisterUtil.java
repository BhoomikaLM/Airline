package com.udaan.airline.util;
import org.springframework.stereotype.Component;
import com.udaan.airline.model.Register;

@Component
public class RegisterUtil {

	public void mapToActualObject(Register actual, Register register) {
//		if(login.getName()!=null)
		actual.setFirst_name(register.getFirst_name());
		actual.setLast_name(register.getLast_name());
		actual.setDob(register.getDob());
		actual.setContact(register.getContact());
		actual.setEmail(register.getEmail());
		actual.setPassword(register.getPassword());
		actual.setConfirm_password(register.getConfirm_password());
	}

}
