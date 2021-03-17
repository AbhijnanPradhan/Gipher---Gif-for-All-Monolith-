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

import com.ibm.fourhorsemen.configuration.JwtUtil;
import com.ibm.fourhorsemen.controller.response.AuthenticationResponse;
import com.ibm.fourhorsemen.controller.response.ResponseMessages;
import com.ibm.fourhorsemen.model.AuthenticationRequest;
import com.ibm.fourhorsemen.service.CustomUserDetailsService;



@RestController
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private CustomUserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@RequestMapping(value="/authenticate" ,method =RequestMethod.POST )
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserId(), authenticationRequest.getPassword()));	
		}catch(DisabledException d) {
			throw new Exception("USER_DISABLED",d);
		}catch(BadCredentialsException d) {
			throw new Exception("Bad credential",d);
		}
		
		UserDetails userDetails=userDetailsService.loadUserByUsername(authenticationRequest.getUserId());
		String token=jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(ResponseMessages.SUCCESS, authenticationRequest.getUserId(), token));
	}
}
