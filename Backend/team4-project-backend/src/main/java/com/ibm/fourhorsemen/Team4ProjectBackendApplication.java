package com.ibm.fourhorsemen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.ibm.fourhorsemen")
@SpringBootApplication
public class Team4ProjectBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(Team4ProjectBackendApplication.class, args);
	}

}
