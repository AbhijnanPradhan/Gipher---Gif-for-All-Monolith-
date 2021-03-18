package com.ibm.fourhorsemen.controller.response;

import com.ibm.fourhorsemen.model.UserExtendedDataBlock;

public class UserExtendedDataBlockResponse extends UserExtendedDataBlock {
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
