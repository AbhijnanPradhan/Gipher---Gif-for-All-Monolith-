package com.ibm.fourhorsemen.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CommentBlock {
	@Id private String commentID;
	
	private String userID;
	private String gifID;
	private String comment;
	private long likes;
	private List<String> likerIDs;
	private boolean edited;
	
	
	public CommentBlock() {
		super();
		this.likes = 0;
		this.edited = false;
		this.likerIDs = new ArrayList<String>();
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
		this.likes = 0;
		this.edited = false;
		this.likerIDs = new ArrayList<String>();
	}
	

	public CommentBlock(String commentID, String userID, String gifID, String comment) {
		super();
		this.commentID = commentID;
		this.userID = userID;
		this.gifID = gifID;
		this.comment = comment;
		this.likes = 0;
		this.edited = false;
		this.likerIDs = new ArrayList<String>();
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
	public long getLikes() {
		return likes;
	}
	public boolean getEdited() {
		return edited;
	}
	public List getLikerIds() {
		return likerIDs;
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
	public void setLikes(long likes) {
		this.likes = likes;
	}
	public void setEdited() {
		this.edited = true;
	}
	public void addLike() {
		this.likes += 1;
	}
	public boolean removeLike() {
		if(this.likes >= 0)
			this.likes -= 1;
		
		return(this.likes >= 0);
	}
	public void addToLikerIds(String likerID) {
		this.likerIDs.add(likerID);
	}
	public boolean removeFromLikerIds(String likerID) {
		if(this.likerIDs.contains(likerID))
			this.likerIDs.remove(likerID);
		
		return this.likerIDs.contains(likerID);
	}
	public boolean likerIDPresent(String likerID) {
		return this.likerIDs.contains(likerID);
	}
}
