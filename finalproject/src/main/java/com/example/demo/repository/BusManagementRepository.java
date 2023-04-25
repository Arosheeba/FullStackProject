package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.BusManagement;

@Repository
public interface BusManagementRepository extends JpaRepository<BusManagement, Integer>{
             List<BusManagement> findBystartingPoint(String startingPoint);
	//List<BusManagement> findBybusType(String busType);

	List<BusManagement> findBybusType(String busType);

	//Iterable<BusManagement> findBybusTypeContaining(String busType);
}
