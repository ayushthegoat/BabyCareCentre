package com.app.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChargesCalculationBeanPatient;
import com.app.dto.MedicineAssignedDataBackinBean;
import com.app.dto.PatientDataBacking;
import com.app.dto.Response;
import com.app.service.PatientServices;
//@
@CrossOrigin("*")
@RestController
@RequestMapping("/api/patient")
public class PatientController {
	@Autowired
	PatientServices pServices;
	@RolesAllowed("ROLE_RECEPTION")
	@PostMapping("/addPatient")
	public ResponseEntity<?> addPatient(@RequestBody PatientDataBacking patientData) {
		int updateCount = pServices.addPatient(patientData);
		if (updateCount == 1)
			return Response.success("added");
		return Response.error("adding failed");
	}

	@GetMapping("/getAllPatients")@RolesAllowed({"ROLE_RECEPTION","ROLE_ACCOUNTANT"})
	public ResponseEntity<?> getAllPatients() {
		List<PatientDataBacking> patients = pServices.getAllPatients();

		return Response.success(patients);
	}


}
