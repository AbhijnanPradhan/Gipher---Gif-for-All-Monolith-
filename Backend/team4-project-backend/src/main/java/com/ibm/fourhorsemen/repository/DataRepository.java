package com.ibm.fourhorsemen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fourhorsemen.model.DataBlock;

@Repository
public interface DataRepository extends MongoRepository<DataBlock, String>{

}
