package clone.demo.Service;

import clone.demo.Model.Movie;
import clone.demo.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImplt implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieByName(String name) {
        Optional<Movie> movieOptional = movieRepository.findByName(name);
        return movieOptional.orElse(null);
    }

    @Override
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public void deleteMovie(String name) {
        movieRepository.deleteByName(name);
    }
}
