package com.ibm.fourhorsemen.service;

import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.fourhorsemen.model.User;
import com.ibm.fourhorsemen.repository.UserRepository;

@Service
public class UserService {
	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Transactional
	public boolean registerUser(User user) {
		try {
			if (userRepository.findById(user.getUserId()).isPresent())
				return false;
			else {
				userRepository.save(user);
				return true;
			}
		} catch (IllegalArgumentException e) {
			return false;
		}
	}

	@Transactional
	public boolean updateuser(User user) {
		try {
			userRepository.save(user);
			return true;
		} catch (IllegalArgumentException e) {
			return false;
		}
	}

	@Transactional
	public User getUserById(String userId) {
		try {
			return userRepository.findById(userId).get();
		} catch (NoSuchElementException e) {
			return null;
		}
	}

	@Transactional
	public boolean validateUser(String userId, String password) {
		return userRepository.validateUser(userId, password).size() == 1;
	}

	@Transactional
	public boolean deleteUser(String userId) {
		try {
			if (!userRepository.findById(userId).isPresent())
				return false;
			else {
				userRepository.deleteById(userId);
				return true;
			}
		} catch (IllegalArgumentException e) {
			return false;
		}
	}

}
