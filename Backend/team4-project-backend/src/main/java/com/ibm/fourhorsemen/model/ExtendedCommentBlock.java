package com.ibm.fourhorsemen.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class ExtendedCommentBlock extends CommentBlock {
	@Id private String commentID;
	private long likes;
	private List<String> likerIDs;
	private boolean edited;
	/**
	 * @param commentID
	 * @param likes
	 * @param likerIDs
	 * @param edited
	 */
	public ExtendedCommentBlock(String userID, String gifID, String comment, String commentID, long likes, List<String> likerIDs, boolean edited) {
		super(userID, gifID, comment);
		this.commentID = commentID;
		this.likes = likes;
		this.likerIDs = likerIDs;
		this.edited = edited;
	}

	public ExtendedCommentBlock() {
		super();
		this.likes = 0;
		this.edited = false;
		this.likerIDs = new ArrayList<String>();
	}
	
	public String getCommentID() {
		return commentID;
	}

	public long getLikes() {
		return likes;
	}

	public List<String> getLikerIDs() {
		return likerIDs;
	}

	public boolean isEdited() {
		return edited;
	}

	public void setCommentID(String commentID) {
		this.commentID = commentID;
	}

	public void setLikes(long likes) {
		this.likes = likes;
	}

	public void setLikerIDs(List<String> likerIDs) {
		this.likerIDs = likerIDs;
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
