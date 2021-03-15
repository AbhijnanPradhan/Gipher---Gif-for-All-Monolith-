package com.ibm.fourhorsemen.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ibm.fourhorsemen.model.CommentBlock;
import com.ibm.fourhorsemen.repository.CommentDataRepository;

@Service
public class CommentService {
	
	private CommentDataRepository commentDataRepository;
	
	@Autowired
	public CommentService(CommentDataRepository commentDataRepository) {
		this.commentDataRepository = commentDataRepository;
	}
	
	@Transactional
	public CommentBlock addComment(CommentBlock commentBlock) {
		// expecting commentID to create automatically.
		return commentDataRepository.insert(commentBlock);
		
	}
	
	@Transactional
	public int removeComment(String commentID, String userID) {
		Optional<CommentBlock> reqComment = commentDataRepository.findById(commentID);
		
		if (reqComment.isPresent()) {
			if(reqComment.get().getUserID() == userID) {
				commentDataRepository.deleteById(commentID); // try not required as condition tested in before if
				
				//successful removal
				return 1;
			}else {
				//userID does not match
				return 0;
			}
		}
		
		//Comment by such commentID does not exist.
		return -1;
	}
	
	@Transactional
	public int editComment(String commentID, String userID, String newComment) {
Optional<CommentBlock> reqComment = commentDataRepository.findById(commentID);
		
		if (reqComment.isPresent()) {
			if(reqComment.get().getUserID() == userID) {
				commentDataRepository.deleteById(commentID); // try not required as condition tested in before if
				reqComment.get().setComment(newComment);
				reqComment.get().setEdited();
				commentDataRepository.insert(reqComment.get());
				
				//successful edit
				return 1;
			}else {
				//userID does not match
				return 0;
			}
		}
		
		//Comment by such commentID does not exist.
		return -1;
		
	}
	
	@Transactional
	public int addLikeToComment(String commentID, String likerID) {
		Optional<CommentBlock> reqComment = commentDataRepository.findById(commentID);
		
		if (reqComment.isPresent()) {
			if(!reqComment.get().likerIDPresent(likerID)) {
				commentDataRepository.deleteById(commentID); // try not required as condition tested in before if
				reqComment.get().addLike();
				reqComment.get().addToLikerIds(likerID);
				commentDataRepository.insert(reqComment.get());
				
				//successful edit
				return 1;
			}else {
				//LikerID id already present
				return 0;
			}
		}
	
		//Comment by such commentID does not exist.
		return -1;
	}
	
	@Transactional
	public int removeLikeFromComment(String commentID, String likerID) {
Optional<CommentBlock> reqComment = commentDataRepository.findById(commentID);
		
		if (reqComment.isPresent()) {
			if(reqComment.get().likerIDPresent(likerID)) {
				commentDataRepository.deleteById(commentID); // try not required as condition tested in before if
				reqComment.get().removeLike(); // if likerId is present then no. of likes will be more than 0
				reqComment.get().removeFromLikerIds(likerID);
				commentDataRepository.insert(reqComment.get());
				
				//successful edit
				return 1;
			}else {
				//LikerID id already present
				return 0;
			}
		}
	
		//Comment by such commentID does not exist.
		return -1;
	}
	
	public List<CommentBlock> getCommentsByGifID(String gifID) {
		List reqCommentBlock = new ArrayList<CommentBlock>();
		for(CommentBlock item: commentDataRepository.findAll()) {
			if(item.getGifID() == gifID)
				reqCommentBlock.add(item);
		}
		return reqCommentBlock;
	}
	
	public List<CommentBlock> getCommentsByUserID(String userID){
		List reqCommentBlock = new ArrayList<CommentBlock>();
		for(CommentBlock item: commentDataRepository.findAll()) {
			if(item.getUserID() == userID)
				reqCommentBlock.add(item);
		}
		return reqCommentBlock;
	}
	
	
}
