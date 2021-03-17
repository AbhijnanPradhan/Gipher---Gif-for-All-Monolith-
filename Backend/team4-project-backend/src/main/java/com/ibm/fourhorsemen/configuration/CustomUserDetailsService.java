package com.ibm.fourhorsemen.configuration;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ibm.fourhorsemen.model.UserDAO;
import com.ibm.fourhorsemen.model.UserDTO;
import com.ibm.fourhorsemen.repository.UserRepository;
@Service
public class CustomUserDetailsService implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder bcrpytEncoder;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		List<SimpleGrantedAuthority> roles=null;
		
		UserDAO user=userRepository.findByUsername(username);
		
		if(user!=null) {
			roles=Arrays.asList(new SimpleGrantedAuthority(user.getRole()));
			return new User(user.getUsername(),user.getPassword(),roles);
			
		}
		throw new UsernameNotFoundException("User not found :"+ user);
	}
		public UserDAO save(UserDTO user){
			UserDAO newUser= new UserDAO();
			newUser.setUsername(user.getUsername());
			newUser.setPassword(bcrpytEncoder.encode(user.getPassword()));
			newUser.setRole(user.getRole());
			return userRepository.save(newUser);
			
		}
	}


