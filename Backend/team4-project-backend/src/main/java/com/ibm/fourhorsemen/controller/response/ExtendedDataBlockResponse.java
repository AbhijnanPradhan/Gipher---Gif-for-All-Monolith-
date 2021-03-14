package com.ibm.fourhorsemen.controller.response;

import com.ibm.fourhorsemen.model.ExtendedDataBlock;

public class ExtendedDataBlockResponse extends ExtendedDataBlock {
	private String message;

	public ExtendedDataBlockResponse() {
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
