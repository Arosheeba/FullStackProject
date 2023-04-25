package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptionHandling.ResourceNotFoundException;
import com.example.demo.model.BusManagement;
import com.example.demo.repository.BusManagementRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/BusManagement.com")

public class BusManagementController {
	
	@Autowired
	private BusManagementRepository busManagementRepository;

	// get all BusManagements
	@GetMapping("/busManagements")
	/*public List<BusManagement> getAllBusManagement(){
		return busManagementRepository.findAll();
	}*/
	 public ResponseEntity<List<BusManagement>> getAllBusManagement(@RequestParam(required = false) String startingPoint){

		try {
			   List<BusManagement> busList = new ArrayList<BusManagement>();
			   if(startingPoint != null) {
				   busManagementRepository.findBystartingPoint(startingPoint).forEach(busList::add);
				  return new ResponseEntity<>(busList, HttpStatus.OK); 
			   }
			   else {
				   busList = busManagementRepository.findAll();
				   return new ResponseEntity<>(busList, HttpStatus.OK); 
			   }
		   }
		   catch (Exception e) {
			   return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		   }
	   }	

	// create BusManagement rest api
	@PostMapping("/busManagements")
	public BusManagement createBusManagement(@RequestBody BusManagement busManagement) {
		return busManagementRepository.save(busManagement);
	}

	// get busManagement by id rest api
	@GetMapping("/busManagements/{id}")
	public ResponseEntity<BusManagement> getBusManagementById(@PathVariable Integer id) {
		BusManagement busManagement = busManagementRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("BusManagement not exist with id :" + id));
		
		System.out.println(busManagement);
		return ResponseEntity.ok(busManagement);
	}
	@GetMapping("/busManagements/AcBus")
	public ResponseEntity<List<BusManagement>> findAcBus() {

			try {
				   List<BusManagement> acBusList = busManagementRepository.findBybusType("ac");
	
				   if(acBusList.isEmpty()) {
					  
					  return new ResponseEntity<>(acBusList, HttpStatus.NO_CONTENT); 
				   }
				   
					  return new ResponseEntity<>(acBusList,HttpStatus.OK); 
			}
			
			catch (Exception e) {
				   return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
			   }
	}
	@GetMapping("/busManagements/NonAcBus")
	public ResponseEntity<List<BusManagement>> findNonAcBus() {

			try {
				   List<BusManagement> nonAcBusList = busManagementRepository.findBybusType("nonac");
	
				   if(nonAcBusList.isEmpty()) {
					  
					  return new ResponseEntity<>(nonAcBusList, HttpStatus.NO_CONTENT); 
				   }
				   
					  return new ResponseEntity<>(nonAcBusList,HttpStatus.OK); 
			}
			
			catch (Exception e) {
				   return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
			   }
	}


	// update BusManagement rest api

	@PutMapping("/busManagements/{id}")
	public ResponseEntity<BusManagement> updateEmployee(@PathVariable Integer id, @RequestBody BusManagement busManagementDetails){
		BusManagement busManagement = busManagementRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("BusManagement not exist with id :" + id));

	
		busManagement.setBusType(busManagementDetails.getBusType());
		busManagement.setStartingPoint(busManagementDetails.getStartingPoint());
		busManagement.setEndingPoint(busManagementDetails.getEndingPoint());
		
	

		BusManagement updatedBusManagement = busManagementRepository.save(busManagement);
		return ResponseEntity.ok(updatedBusManagement);
	}

	// delete busManagement rest api
	@DeleteMapping("/busManagements/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBusManagement(@PathVariable Integer id){
		BusManagement busManagement = busManagementRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("BusManagement not exist with id :" + id));

		busManagementRepository.delete(busManagement);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
   @DeleteMapping("/busManagements")
   public ResponseEntity<HttpStatus> deleteAllBus(){
	   try {
		   busManagementRepository.deleteAll();
		   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   }
	   catch (Exception e) {
		   return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	   }
   }
   public ResponseEntity<BusManagement> updateBookingDetails(@PathVariable int id, @RequestBody BusManagement BusDetails){
		BusManagement busManagement= busManagementRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("The record for id "+id+" does not exist"));

		busManagement.setBookedSeats(BusDetails.getBookedSeats());
		busManagement.setTotalPrice(BusDetails.getTotalPrice());

		BusManagement updatedBusDetails= busManagementRepository.save(busManagement);
		return ResponseEntity.ok(updatedBusDetails);
	}
}
 

