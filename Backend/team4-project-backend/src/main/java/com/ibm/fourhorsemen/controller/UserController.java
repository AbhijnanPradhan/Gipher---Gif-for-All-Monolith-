package com.ibm.fourhorsemen.controller;

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

import com.ibm.fourhorsemen.controller.response.MessageResponse;
import com.ibm.fourhorsemen.controller.response.ResponseMessages;
import com.ibm.fourhorsemen.controller.response.UserResponse;
import com.ibm.fourhorsemen.model.User;
import com.ibm.fourhorsemen.service.UserService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {
	private UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user, @RequestParam String password) {
		try {
			user.setPassword(password);
			if (userService.registerUser(user)) {
				UserResponse response = new UserResponse();
				BeanUtils.copyProperties(user, response);
				response.setMessage(ResponseMessages.SUCCESS);
				return ResponseEntity.ok(response);
			} else
				return ResponseEntity.ok(new MessageResponse(ResponseMessages.USER_EXISTS));
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@GetMapping("/get")
	public ResponseEntity<?> getUser(@RequestParam String userId) {
		try {
			User user = userService.getUserById(userId);
			if (user == null) {
				return ResponseEntity.ok(new MessageResponse(ResponseMessages.USER_NOT_EXISTS));
			} else {
				UserResponse response = new UserResponse();
				BeanUtils.copyProperties(user, response);
				response.setMessage(ResponseMessages.SUCCESS);
				return ResponseEntity.ok(response);
			}
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
