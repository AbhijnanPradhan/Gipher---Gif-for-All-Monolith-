package com.ibm.fourhorsemen.controller;

import java.util.Calendar;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fourhorsemen.controller.response.ResponseMessages;
import com.ibm.fourhorsemen.model.CommentBlock;
import com.ibm.fourhorsemen.model.DataBlock;
import com.ibm.fourhorsemen.model.ExtendedCommentBlock;
import com.ibm.fourhorsemen.model.ExtendedDataBlock;
import com.ibm.fourhorsemen.service.CommentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/comment")
public class CommentsController {
	
	private CommentService commentService;
	
	@Autowired
	public CommentsController(CommentService commentService) {
		this.commentService = commentService;
	}
	
	@GetMapping("/getByGifID")
	public ResponseEntity<List<ExtendedCommentBlock>> getCommentsByGif(@RequestParam String gifId) {
		try {
			List<ExtendedCommentBlock> list = commentService.getCommentsByGifID(gifId);
			return ResponseEntity.ok(list);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@GetMapping("/getByUser")
	public ResponseEntity<List<ExtendedCommentBlock>> getCommentsByUser(@RequestParam String userId){
		try {
			List<ExtendedCommentBlock> list = commentService.getCommentsByUserID(userId);
			return ResponseEntity.ok(list);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addComment(@RequestBody CommentBlock data){
		try {
			ExtendedCommentBlock extendedBlock = new ExtendedCommentBlock();
			BeanUtils.copyProperties(data, extendedBlock);
			
			String commentId = data.getUserID()+"$"+data.getGifID()+"$"+(Calendar.getInstance().getTimeInMillis()/1000);
			
			extendedBlock.setCommentID(commentId);
			commentService.addComment(extendedBlock);
			return ResponseEntity.ok(ResponseMessages.SUCCESS);
		}catch(IllegalArgumentException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PostMapping("/remove")
	public ResponseEntity<?> removeComment(@RequestParam String commentId,@RequestParam String userId){
		try {
			int response = commentService.removeComment(commentId,userId);
			/** 
			 * response 0 - userId not match
			 * response 1 - successful
			 * response -1 - commentID does not exist
			 */
			
			if(response == 0) {
				return ResponseEntity.ok(ResponseMessages.USERID_MISMATCH);
			}else if(response == 1) {
				return ResponseEntity.ok(ResponseMessages.SUCCESS);
			}else {
				return ResponseEntity.ok(ResponseMessages.COMMENT_NOT_EXISTS);
			}
			
		}catch(IllegalArgumentException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PostMapping("/edit")
	public ResponseEntity<?> editComment(@RequestParam String commentId,@RequestParam String userId,@RequestParam String comment){
		try {
			int response = commentService.editComment(commentId,userId,comment);
			/** 
			 * response 0 - userId not match
			 * response 1 - successful
			 * response -1 - commentID does not exist
			 */
			
			if(response == 0) {
				return ResponseEntity.ok(ResponseMessages.USERID_MISMATCH);
			}else if(response == 1) {
				return ResponseEntity.ok(ResponseMessages.SUCCESS);
			}else {
				return ResponseEntity.ok(ResponseMessages.COMMENT_NOT_EXISTS);
			}
			
		}catch(IllegalArgumentException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PostMapping("/addLike")
	public ResponseEntity<?> addLikeToComment(@RequestParam String commentId,@RequestParam String likerId){
		try {
			int response = commentService.addLikeToComment(commentId, likerId);
			/** 
			 * response 0 - Liker Id already present
			 * response 1 - successful
			 * response -1 - commentID does not exist
			 */
			
			if(response == 0) {
				return ResponseEntity.ok(ResponseMessages.USER_ALREADY_LIKED);
			}else if(response == 1) {
				return ResponseEntity.ok(ResponseMessages.SUCCESS);
			}else {
				return ResponseEntity.ok(ResponseMessages.COMMENT_NOT_EXISTS);
			}
			
		}catch(IllegalArgumentException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PostMapping("/removeLike")
	public ResponseEntity<?> removeLikeFromComment(@RequestParam String commentId,@RequestParam String likerId){
		try {
			int response = commentService.removeLikeFromComment(commentId, likerId);
			/** 
			 * response 0 - Liker Id already present
			 * response 1 - successful
			 * response -1 - commentID does not exist
			 */
			
			if(response == 0) {
				return ResponseEntity.ok(ResponseMessages.USER_ALREADY_LIKED);
			}else if(response == 1) {
				return ResponseEntity.ok(ResponseMessages.SUCCESS);
			}else {
				return ResponseEntity.ok(ResponseMessages.COMMENT_NOT_EXISTS);
			}
			
		}catch(IllegalArgumentException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	

}
