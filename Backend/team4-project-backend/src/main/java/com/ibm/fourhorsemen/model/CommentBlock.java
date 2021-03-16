package com.ibm.fourhorsemen.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

public class CommentBlock {
	private String commentID;
	
	private String userID;
	private String gifID;
	private String comment;
	
	
	public CommentBlock() {
		super();
	}
	
	/**
	 * @param commentID
	 * @param userID
	 * @param gitID
	 * @param comment
	 * @param likes
	 */
	
	public CommentBlock(String userID, String gifID, String comment) {
		super();
		this.userID = userID;
		this.gifID = gifID;
		this.comment = comment;
	}

	public String getCommentID() {
		return commentID;
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

	public void setCommentID(String commentID) {
		this.commentID = commentID;
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
