package com.ibm.fourhorsemen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ibm.fourhorsemen.model.UserDataBlockMap;
import com.ibm.fourhorsemen.model.UserDataBlockMapId;

@Repository
public interface UserDataMapRepository extends CrudRepository<UserDataBlockMap, UserDataBlockMapId> {

	@Query("select udp from UserDataBlockMap udp where udp.userId = :user_id")
	List<UserDataBlockMap> findByUserId(@Param("user_id") String userId);
}
