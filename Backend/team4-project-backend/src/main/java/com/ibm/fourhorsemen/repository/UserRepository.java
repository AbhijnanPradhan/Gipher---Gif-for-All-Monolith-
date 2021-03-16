package com.ibm.fourhorsemen.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fourhorsemen.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
