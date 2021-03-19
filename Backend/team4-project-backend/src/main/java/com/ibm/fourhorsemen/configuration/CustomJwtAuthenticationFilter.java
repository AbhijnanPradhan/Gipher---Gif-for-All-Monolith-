package com.ibm.fourhorsemen.configuration;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;



@Component
public class CustomJwtAuthenticationFilter extends OncePerRequestFilter  {

	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			String jwtToken = extractJwtFromRequest(request);
			
			if(StringUtils.hasText(jwtToken) && jwtTokenUtil.validateToken(jwtToken)) {
				UserDetails userDetails= new User(jwtTokenUtil.getUsernameFromToken(jwtToken),"",jwtTokenUtil.getRolesFromToken(jwtToken));
				
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
				
			
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
				System.out.println("------------------->"+userDetails);
			}else {
				System.out.println("Cannot set security context");
			}
			}catch(ExpiredJwtException e) {
				request.setAttribute("exception occured :", e);
				throw e;
			}catch(BadCredentialsException e) {
				request.setAttribute("exception occured :", e);
				throw e;
			}
		chain.doFilter(request, response);
		
		
	}

	private String extractJwtFromRequest(HttpServletRequest request) {
		// TODO Auto-generated method stub
		String bearerToken =request.getHeader("Authorization");
		if(StringUtils.hasText(bearerToken)&& bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7,bearerToken.length());
			
		}
		return null;
	}

	

	

	

	

}
