package com.ibm.fourhorsemen.repository;

import org.springframework.data.repository.CrudRepository;

import com.ibm.fourhorsemen.model.UserDataBlockMap;
import com.ibm.fourhorsemen.model.UserDataBlockMapId;

public interface UserDataMapRepository extends CrudRepository<UserDataBlockMap, UserDataBlockMapId> {

}
