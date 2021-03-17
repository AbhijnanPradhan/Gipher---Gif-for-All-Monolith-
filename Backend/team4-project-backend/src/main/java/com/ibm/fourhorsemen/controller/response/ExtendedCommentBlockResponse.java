package com.ibm.fourhorsemen.controller.response;

import com.ibm.fourhorsemen.model.ExtendedCommentBlock;

public class ExtendedCommentBlockResponse extends ExtendedCommentBlock {
	private String message;

	
	public ExtendedCommentBlockResponse(ExtendedCommentBlock data) {
		super(data.getUserID(),data.getGifID(),data.getComment(),data.getCommentID(), 
				data.getLikes(), data.getLikerIDs(), data.isEdited());
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
