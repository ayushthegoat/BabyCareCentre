package com.app.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DoctorDataBackinBean;
import com.app.dto.DoctorVisitsDataBackinBean;
import com.app.dto.Response;
import com.app.dto.PatientDataBacking;
import com.app.service.DoctorServices;
import com.app.service.DoctorVisitsServices;
import com.app.service.PatientServices;
@CrossOrigin("*")
@RestController @RequestMapping("/api/doctor")
public class DoctorController  {
	@Autowired
	DoctorServices  doctorServices;
	@Autowired
	DoctorVisitsServices visitService;
	@Autowired
	PatientServices patientService;
	
	
	@GetMapping("/getAllDoctors")
	public ResponseEntity<?> getAllPatients(){
		List<DoctorDataBackinBean> doctors=doctorServices.getAllDoctors();
		
		return Response.success(doctors);
	}
	@RolesAllowed({"ROLE_DOCTOR"})
	@PostMapping("/addPrescription")
	public void updatePatient(@RequestBody PatientDataBacking patientData) {
		
		doctorServices.updatePatientDetails(patientData);
	}
	@RolesAllowed({"ROLE_DOCTOR"})
	@PostMapping("/increaseVisitCount")
	public ResponseEntity<?> increaseVisitCount(@RequestBody DoctorVisitsDataBackinBean visitData) {
		visitService.increaseVisitCount(visitData);
		return Response.success("increamented");
	}

	
}
