package com.ibm.fourhorsemen.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ibm.fourhorsemen.model.ExtendedCommentBlock;
import com.ibm.fourhorsemen.repository.CommentDataRepository;

@Service
public class CommentService {
	
	private CommentDataRepository commentDataRepository;
	
	@Autowired
	public CommentService(CommentDataRepository commentDataRepository) {
		this.commentDataRepository = commentDataRepository;
	}
	
	public ExtendedCommentBlock addComment(ExtendedCommentBlock ExtendedCommentBlock) {
		// expecting commentID to create automatically.
		return commentDataRepository.save(ExtendedCommentBlock);
	}
	
	@Transactional
	public int removeComment(String commentID, String userID) {
		Optional<ExtendedCommentBlock> reqComment = commentDataRepository.findById(commentID);
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
Optional<ExtendedCommentBlock> reqComment = commentDataRepository.findById(commentID);
		
		if (reqComment.isPresent()) {
			if(reqComment.get().getUserID() == userID) {
				commentDataRepository.deleteById(commentID); // try not required as condition tested in before if
				reqComment.get().setComment(newComment);
				reqComment.get().setEdited();
				commentDataRepository.save(reqComment.get());
				
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
	
	public int addLikeToComment(String commentID, String likerID) {
		Optional<ExtendedCommentBlock> reqComment = commentDataRepository.findById(commentID);
		
		if (reqComment.isPresent()) {
			if(!reqComment.get().likerIDPresent(likerID)) {
				// commentDataRepository.deleteById(commentID); // try not required as condition tested in before if
				reqComment.get().addLike();
				reqComment.get().addToLikerIds(likerID);
				commentDataRepository.save(reqComment.get());
				
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
Optional<ExtendedCommentBlock> reqComment = commentDataRepository.findById(commentID);
		
		if (reqComment.isPresent()) {
			if(reqComment.get().likerIDPresent(likerID)) {
				commentDataRepository.deleteById(commentID); // try not required as condition tested in before if
				reqComment.get().removeLike(); // if likerId is present then no. of likes will be more than 0
				reqComment.get().removeFromLikerIds(likerID);
				commentDataRepository.save(reqComment.get());
				
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
	
	public List<ExtendedCommentBlock> getCommentsByGifID(String gifID) {
		List<ExtendedCommentBlock> reqExtendedCommentBlock = commentDataRepository.findCommentsByGifId(gifID);
//		List reqExtendedCommentBlock = new ArrayList<ExtendedCommentBlock>();
//		for(ExtendedCommentBlock item: commentDataRepository.findAll()) {
//			if(item.getGifID() == gifID)
//				reqExtendedCommentBlock.add(item);
//		}
		return reqExtendedCommentBlock;
	}
	
	public List<ExtendedCommentBlock> getCommentsByUserID(String userID){
		List<ExtendedCommentBlock> reqExtendedCommentBlock = commentDataRepository.findCommentsByUserId(userID);
		return reqExtendedCommentBlock;
	}
	
//	public int getCommentLikedStatusByUserIdAndCommentId(String userID,String commentID) {
//		ExtendedCommentBlock res = getCommentByCommentID(commentID);
//		if(res!=null) {
//			if(res.likerIDPresent(userID)) {
//				// userID found
//				return 1;
//				}
//			// commentID found but userID not a liker
//			return 0;
//		}
//		// commentID not found
//		return -1;
//	
//	}
	
	public ExtendedCommentBlock getCommentByCommentID(String commentID) {
		Optional<ExtendedCommentBlock> reqComment = commentDataRepository.findById(commentID);

		if(reqComment.isPresent()) {
			ExtendedCommentBlock res = new ExtendedCommentBlock(reqComment.get().getUserID(),reqComment.get().getGifID(),reqComment.get().getComment(),
					reqComment.get().getCommentID(),reqComment.get().getLikes(),reqComment.get().getLikerIDs(),reqComment.get().isEdited());
			
			return res;
		}
			
		return null;	
	}
	
	
}
