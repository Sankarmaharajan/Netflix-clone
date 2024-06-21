package clone.demo.Service;

import clone.demo.Model.Movie;
import java.util.List;

public interface MovieService {
    List<Movie> getAllMovies();
    Movie getMovieByName(String name);
    Movie saveMovie(Movie movie);
    void deleteMovie(String name);
}
