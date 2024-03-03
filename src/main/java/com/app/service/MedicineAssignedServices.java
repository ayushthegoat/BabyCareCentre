package com.app.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
//import static com.app.dto.WardDataBackinBean.*;

import com.app.custom_exceptions.NoSuchMedicineExistsException;
import com.app.dao.IDoctorDao;
import com.app.dao.IEmployeeDao;
import com.app.dao.IMedicineAssignedDao;
import com.app.dao.IMedicineDao;
import com.app.dao.IUserDao;
//import com.app.dao.IWardDao;
import com.app.dto.DoctorDataBackinBean;
import com.app.dto.MedicineAssignedDataBackinBean;
//import com.app.dto.WardDataBackinBean;
import com.app.entities.Ward;
import com.app.entities.User;

@Service @Transactional
public class MedicineAssignedServices {
	@Autowired
	IUserDao userDao;
	@Autowired
	IEmployeeDao employeeDao;
//	@Autowired
//	IWardDao wardDao;
	@Autowired
	IMedicineAssignedDao medicineAssingedDao;
	@Autowired
	IMedicineDao medicineDao;
	
	public void addMedicineToPatient(MedicineAssignedDataBackinBean medicineData) throws NoSuchMedicineExistsException {
		
			medicineAssingedDao.addIntoMedicineAssigned(medicineData.getPatId(), medicineData.getMedicineId(), medicineData.getMedicinePrescription(), medicineData.getMedicineQty());
		
		
		
	}
	
	public void removeMedicineOfPatient(int medicineAssignId) {
		medicineAssingedDao.deleteById(medicineAssignId);
	}
	
	
	
	

}
