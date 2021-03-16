package com.ibm.fourhorsemen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ibm.fourhorsemen.model.User;
import com.ibm.fourhorsemen.model.UserDAO;

@Repository
//public interface UserRepository extends CrudRepository<User, String> {
//
//}

public interface UserRepository extends JpaRepository<UserDAO, Long>{
	UserDAO findByUsername(String username);
}