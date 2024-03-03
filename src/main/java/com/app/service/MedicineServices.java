package com.app.service;
import java.util.List;
import static com.app.dto.MedicineAssignedDataBackinBean.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
//import static com.app.dto.WardDataBackinBean.*;

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
import com.app.entities.Medicine;
import com.app.entities.User;

@Service @Transactional
public class MedicineServices {
	@Autowired
	IUserDao userDao;
	@Autowired
	IEmployeeDao employeeDao;
//	@Autowired
//	IWardDao wardDao;
	@Autowired
	IMedicineDao medicineDao;
	@Autowired
	IMedicineAssignedDao medicineAssingedDao;
	
	public List<MedicineAssignedDataBackinBean> getAllMedicines(){
		List<Medicine> medicine=medicineDao.findAll();
		List<MedicineAssignedDataBackinBean> medicinesTosend=createAllMedicineList(medicine);
		return medicinesTosend;
		
	}

	public int addMedicine(MedicineAssignedDataBackinBean medicineData) {
		return  medicineDao.insertIntoMedicineTable(0, medicineData.getMedicineName(), medicineData.getMedicinePrice());
		
	}

	public void removeMedicine(int medicineId) {
		medicineDao.deleteById(medicineId);
		
	}
	
	
	
	
	

}
