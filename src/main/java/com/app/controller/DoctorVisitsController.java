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
//import com.app.dto.WardDataBackinBean;
import com.app.service.DoctorServices;
import com.app.service.DoctorVisitsServices;
import com.app.service.PatientServices;
//import com.app.service.WardServices;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/doctorVisit")
public class DoctorVisitsController {
	@Autowired
	DoctorVisitsServices visitServices;



	@PostMapping("/addVisit")
	public ResponseEntity<?> addWard(@RequestBody DoctorVisitsDataBackinBean visitData) {
		int updateCount = visitServices.addVisit(visitData);
		if (updateCount == 1)
			return Response.success("VISIT_ADDED");
		return Response.success("FAILED");
	}

	

}
