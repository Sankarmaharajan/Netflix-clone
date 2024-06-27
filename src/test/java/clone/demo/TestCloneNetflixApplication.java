package clone.demo;

import org.springframework.boot.SpringApplication;

public class TestCloneNetflixApplication {

	public static void main(String[] args) {
		SpringApplication.from(CloneNetflixApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
