package com.ibm.fourhorsemen.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ibm.fourhorsemen.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

	//using u.userId because that is the variable name we used in Java
	//user_id is the column name we use in the database
	@Query("select u from User u where u.userId = :user_id and u.password = :password")
	Collection<User> validateUser(@Param("user_id") String userId, @Param("password") String password);
}
