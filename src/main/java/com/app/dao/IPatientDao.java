package com.app.dao;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Patient;

public interface IPatientDao extends JpaRepository<Patient,Integer> {

	@Modifying
	@Query(value = "insert into patients values (:id, :user_id, :ward_id, :doctor_id, :date_of_admission"
			+ ", :blood_group, :dob, :prescription, :bed_alloted, :payment_status, :patient_problem)",nativeQuery = true)
	int insertIntoPatients(@Param("id") int id ,@Param("user_id") int user_id ,@Param("doctor_id") int doctor_id,@Param("ward_id") int ward_id
			,@Param("date_of_admission") Date date_of_admission,@Param("blood_group") String blood_group ,@Param("dob") Date dob ,
			@Param("prescription") String prescription ,@Param("bed_alloted") int bed_alloted,@Param("payment_status") String payment_status ,@Param("patient_problem") String patient_problem);

	
	@Modifying
	@Query(value = "update patients set prescription= :prescription  where id= :patId",nativeQuery = true)
	int updatePatientPrescription(@Param("prescription") String prescription,@Param("patId") int patId);

	@Query(value="select datediff(date(now()),date_of_admission) from patients where id = :patId",nativeQuery = true)
	int calculateDaysOfStayOfPatient(@Param("patId") int patId);
	

	Boolean existsByBedAllotedAndWardId(int bedNo,int wardId);

	Patient findByUserId(int userId);
}
