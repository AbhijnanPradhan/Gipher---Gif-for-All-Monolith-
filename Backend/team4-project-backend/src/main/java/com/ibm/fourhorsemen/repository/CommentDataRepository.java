package com.ibm.fourhorsemen.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fourhorsemen.model.CommentBlock;


@Repository
public interface CommentDataRepository extends MongoRepository<CommentBlock, String>{

}

