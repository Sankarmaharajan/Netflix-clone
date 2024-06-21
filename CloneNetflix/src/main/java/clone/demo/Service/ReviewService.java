package clone.demo.Service;

import clone.demo.Model.Review;
import java.util.List;

public interface ReviewService {
    List<Review> getAllReviews();
    Review getReviewById(Long id);
    Review saveReview(Review review);
    void deleteReview(Long id);
}
