package com.ibm.fourhorsemen.controller.response;

import com.ibm.fourhorsemen.model.ExtendedCommentBlock;

public class ExtendedCommentBlockResponse extends ExtendedCommentBlock {
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
