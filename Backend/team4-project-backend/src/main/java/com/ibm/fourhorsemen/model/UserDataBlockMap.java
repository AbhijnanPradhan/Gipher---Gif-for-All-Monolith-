package com.ibm.fourhorsemen.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "UserDataBlockMap")
@IdClass(UserDataBlockMapId.class)
public class UserDataBlockMap implements Serializable {
	private static final long serialVersionUID = 2103996086656741853L;

	@Id
	@Column(name = "user_id", nullable = false)
	String userId;

	@Id
	@Column(name = "gif_id", nullable = false)
	String gifId;

	@Column
	String type;

	public UserDataBlockMap() {
	}

	public UserDataBlockMap(String userId, String gifId, String type) {
		this.userId = userId;
		this.gifId = gifId;
		this.type = type;
	}

	public String getUserId() {
		return userId;
	}

	public String getGifId() {
		return gifId;
	}

	public String getType() {
		return type;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public void setGifId(String gifId) {
		this.gifId = gifId;
	}

	public void setType(String type) {
		this.type = type;
	}

}
