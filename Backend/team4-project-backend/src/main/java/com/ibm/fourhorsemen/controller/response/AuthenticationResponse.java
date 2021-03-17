package com.ibm.fourhorsemen.controller.response;

public class AuthenticationResponse {

	private String message;
	private String userId;
	private String token;

	public AuthenticationResponse(String message, String userId, String token) {
		super();
		this.setMessage(message);
		this.setUserId(userId);
		this.setToken(token);
	}

	public AuthenticationResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
