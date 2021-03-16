package com.ibm.fourhorsemen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fourhorsemen.configuration.CustomerUserDetailsService;
import com.ibm.fourhorsemen.configuration.JwtUtil;
import com.ibm.fourhorsemen.model.AuthenticationRequest;
import com.ibm.fourhorsemen.model.AuthenticationResponse;
import com.ibm.fourhorsemen.model.UserDTO;



@RestController
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private CustomerUserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));	
		}catch(DisabledException d) {
			throw new Exception("USER_DISABLED",d);
		}catch(BadCredentialsException d) {
			throw new Exception("Bad credential",d);
		}
		
		UserDetails userDetails=userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		String token=jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(token));
	}
	
	@RequestMapping(value="/register", method=RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user){
		return ResponseEntity.ok(userDetailsService.save(user));
		
		
	}
	
	
	
	
}
