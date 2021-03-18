package com.ibm.fourhorsemen.model;

import java.io.Serializable;
import java.util.Objects;

public class UserDataBlockMapId implements Serializable {
	private static final long serialVersionUID = 4587516956676373631L;
	
	private String userId;
	private String gifId;
	private String type;
	
	public UserDataBlockMapId() {
	}

	public UserDataBlockMapId(String userId, String gifId, String type) {
		this.userId = userId;
		this.gifId = gifId;
		this.type = type;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDataBlockMapId id = (UserDataBlockMapId) o;
		return userId.equals(id.userId) && gifId.equals(id.gifId) && type.equals(id.type);
	}

	@Override
	public int hashCode() {
		return Objects.hash(userId, gifId, type);
	}
}