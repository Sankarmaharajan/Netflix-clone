package com.example.netflixClone;

import org.springframework.boot.SpringApplication;

public class TestNetflixCloneApplication {

	public static void main(String[] args) {
		SpringApplication.from(NetflixCloneApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
