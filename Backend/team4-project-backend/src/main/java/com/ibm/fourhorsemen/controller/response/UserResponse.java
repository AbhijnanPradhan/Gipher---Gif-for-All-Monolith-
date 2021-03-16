package com.ibm.fourhorsemen.controller.response;

import com.ibm.fourhorsemen.model.User;

public class UserResponse extends User {
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
