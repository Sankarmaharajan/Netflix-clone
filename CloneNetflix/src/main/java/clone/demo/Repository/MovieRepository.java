package clone.demo.Repository;

import clone.demo.Model.Movie;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	void deleteByName(String name);
	Optional<Movie> findByName(String name);
}
