package clone.demo.Controller;

import clone.demo.Model.Movie;
import clone.demo.Service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Movie> getMovieById(@PathVariable String name) {
        Movie movie = movieService.getMovieByName(name);
        if (movie != null) {
            return ResponseEntity.ok(movie);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Movie> saveMovie(@RequestBody Movie movie) {
        Movie savedMovie = movieService.saveMovie(movie);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMovie);
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteMovie(@PathVariable String name) {
        movieService.deleteMovie(name);
        return ResponseEntity.noContent().build();
    }
}
