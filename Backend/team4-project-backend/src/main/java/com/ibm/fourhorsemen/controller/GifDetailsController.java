package com.ibm.fourhorsemen.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ibm.fourhorsemen.controller.response.AllGifDetailsResponse;
import com.ibm.fourhorsemen.controller.response.MessageResponse;
import com.ibm.fourhorsemen.controller.response.ResponseMessages;
import com.ibm.fourhorsemen.controller.response.UserExtendedDataBlockResponse;
import com.ibm.fourhorsemen.model.UserExtendedDataBlock;
import com.ibm.fourhorsemen.service.GifDetailsService;

@Controller
public class GifDetailsController {

	private GifDetailsService gifDetailsService;

	@Autowired
	public GifDetailsController(GifDetailsService gifDetailsService) {
		this.gifDetailsService = gifDetailsService;
	}

	@GetMapping("/gif/details")
	public ResponseEntity<?> getDetails(@RequestParam String userId,
			@RequestParam(required = false, defaultValue = "") String gifId) {
		if (gifId.equals("")) {
			AllGifDetailsResponse response = gifDetailsService.getAll(userId);
			return ResponseEntity.ok(response);
		} else {
			UserExtendedDataBlock resultBlock = gifDetailsService.getDetails(userId, gifId);
			UserExtendedDataBlockResponse response = new UserExtendedDataBlockResponse();
			if (resultBlock != null) {
				BeanUtils.copyProperties(resultBlock, response);
				response.setMessage(ResponseMessages.SUCCESS);
				return ResponseEntity.ok(response);
			} else {
				return ResponseEntity.ok(new MessageResponse(ResponseMessages.FAILURE));
			}
		}
	}
}
