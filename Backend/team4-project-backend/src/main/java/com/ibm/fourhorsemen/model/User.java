package com.ibm.fourhorsemen.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
//
@Entity
@Table(name = "User")
public class User {

	@Id
	@Column(name = "user_id", nullable = false)
	private String userId;

	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "gender")
	private String gender;

	@Column(name = "phone")
	private String phone;

	@Column(name = "dob")
	private Date dateOfBirth;

	@Column(name = "date_added")
	private Date dateAdded;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "role")
	private String role;

	public User() {
	}

	/**
	 * @param userId
	 * @param name
	 * @param email
	 * @param gender
	 * @param phone
	 * @param dateOfBirth
	 * @param dateAdded
	 * @param password
	 * @param role
	 */
	public User(String userId, String name, String email, String gender, String phone, Date dateOfBirth, Date dateAdded,
			String password, String role) {
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.phone = phone;
		this.dateOfBirth = dateOfBirth;
		this.dateAdded = dateAdded;
		this.password = password;
		this.role = role;
	}

	public String getUserId() {
		return userId;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getGender() {
		return gender;
	}

	public String getPhone() {
		return phone;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
