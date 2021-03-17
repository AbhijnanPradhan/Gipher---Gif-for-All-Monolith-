package com.ibm.fourhorsemen.repository;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.ibm.fourhorsemen.model.CommentBlock;
import com.ibm.fourhorsemen.model.ExtendedCommentBlock;


@Repository
public interface CommentDataRepository extends MongoRepository<ExtendedCommentBlock, String>{

	@Query("{'userID' : ?0}")
	List<ExtendedCommentBlock> findCommentsByUserId(String userId);
	@Query("{'gifID' : ?0}")
	List<ExtendedCommentBlock> findCommentsByGifId(String gifId);
}

