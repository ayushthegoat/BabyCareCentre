package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.MedicineAssigned;

public interface IMedicineAssignedDao extends JpaRepository<MedicineAssigned,Integer> {

	@Modifying
	@Query(value= "insert into medicines_assigned values(0, :patId,:medicineId,:prescription,:medicineQty)",nativeQuery = true)
	int addIntoMedicineAssigned(@Param("patId") int patId,@Param("medicineId") int medicineId,@Param("prescription") String prescription,@Param("medicineQty")int medicineQty);

}
