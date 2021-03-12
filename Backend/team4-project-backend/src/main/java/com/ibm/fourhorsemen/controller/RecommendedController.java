package com.ibm.fourhorsemen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fourhorsemen.model.DataBlock;
import com.ibm.fourhorsemen.repository.DataRepository;

@RestController
@RequestMapping("/recommended")
public class RecommendedController {

	@Autowired
	private DataRepository dataRepository;

	@CrossOrigin(origins = "*")
	@GetMapping("/get")
	public ResponseEntity<List<DataBlock>> getRecommended() {
		try {
			List<DataBlock> list = dataRepository.findAll();
			return ResponseEntity.ok(list);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/add")
	public ResponseEntity<DataBlock> addRecommended(@RequestBody DataBlock data) {
		System.out.println(data);
		try {
			dataRepository.save(data);
			return ResponseEntity.ok(data);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
