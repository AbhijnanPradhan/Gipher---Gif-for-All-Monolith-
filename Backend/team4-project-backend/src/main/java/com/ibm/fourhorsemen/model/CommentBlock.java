package com.ibm.fourhorsemen.model;

public class CommentBlock {
	
	private String userID;
	private String gifID;
	private String comment;
	
	
	public CommentBlock() {
		super();
	}
	
	/**
	 * @param userID
	 * @param gitID
	 * @param comment
	 */
	
	public CommentBlock(String userID, String gifID, String comment) {
		super();
		this.userID = userID;
		this.gifID = gifID;
		this.comment = comment;
	}

	public String getUserID() {
		return userID;
	}
	public String getGifID() {
		return gifID;
	}
	public String getComment() {
		return comment;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}
	public void setGifID(String gifID) {
		this.gifID = gifID;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
}
