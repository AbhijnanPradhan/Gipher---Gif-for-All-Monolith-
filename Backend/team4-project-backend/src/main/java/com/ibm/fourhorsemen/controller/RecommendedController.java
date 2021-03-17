package com.ibm.fourhorsemen.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fourhorsemen.controller.response.ExtendedDataBlockResponse;
import com.ibm.fourhorsemen.controller.response.ResponseMessages;
import com.ibm.fourhorsemen.model.DataBlock;
import com.ibm.fourhorsemen.model.ExtendedDataBlock;
import com.ibm.fourhorsemen.service.RecommendedService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/recommended")
public class RecommendedController {

	private RecommendedService recommendedService;

	@Autowired
	public RecommendedController(RecommendedService recommendedService) {
		this.recommendedService = recommendedService;
	}

	@GetMapping("/get")
	public ResponseEntity<List<ExtendedDataBlock>> getRecommended(@RequestParam String userId) {
		try {
			List<ExtendedDataBlock> list = recommendedService.getRecommends(userId);
			return ResponseEntity.ok(list);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@PostMapping("/add")
	public ResponseEntity<?> addRecommended(@RequestParam String userId, @RequestBody DataBlock data) {
		System.out.println(data);
		try {
			ExtendedDataBlockResponse response = new ExtendedDataBlockResponse();
			ExtendedDataBlock resultBlock = recommendedService.addRecommend(userId, data);

			if (resultBlock != null) {
				BeanUtils.copyProperties(resultBlock, response);
				response.setMessage(ResponseMessages.SUCCESS);
			} else {
				response.setMessage(ResponseMessages.RECOMMENDATION_EXISTS);
			}
			return ResponseEntity.ok(response);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
