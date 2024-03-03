package com.app.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.controller.DoctorVisitsController;
import com.app.dao.IDoctorVisitDao;
import com.app.dao.IEmployeeDao;
import com.app.dao.IUserDao;
//import com.app.dao.IWardDao;
import com.app.dto.DoctorVisitsDataBackinBean;
import com.app.entities.DoctorVisit;

@Service @Transactional
public class DoctorVisitsServices {
	@Autowired
	IUserDao userDao;
	@Autowired
	IEmployeeDao employeeDao;
//	@Autowired
//	IWardDao wardDao;
	@Autowired 
	IDoctorVisitDao visitsDao;
	
	public int addVisit(DoctorVisitsDataBackinBean visitData)  {
		return visitsDao.insertIntoDoctorVisitsTable(0, visitData.getPatientId(), visitData.getDoctorId(), 0);
	}
	public void increaseVisitCount(DoctorVisitsDataBackinBean visitData) {
		
		DoctorVisit visit=visitsDao.getVisitsByPatIdAndDoctorId(visitData.getPatientId(),visitData.getDoctorId());
		visit.setVisits(visit.getVisits()+1);
		visitsDao.save(visit);
	}
	
	
	
	

}
