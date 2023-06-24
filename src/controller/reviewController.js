import Review from '../models/review.js';

// Controller to handle review submission
export const createReview = async (req, res) => {
  try {
    // Extract the form data from the request body
    const { name, email, rating, comment } = req.body;

    // Create a new review object
    const newReview = new Review({
      name,
      email,
      rating,
      comment
    });

    // Save the review to the database
    await newReview.save();

    // Return a success response
    return res.status(200).json({ message: 'Review submitted successfully' });
  } catch (error) {
    // Return an error response
    return res.status(500).json({ error: 'Failed to submit review' });
  }
};

// Controller to get all reviews
export const getAllReviews = async (req, res) => {
  try {
    // Fetch all reviews from the database
    const reviews = await Review.find();

    // Return the reviews
    return res.status(200).json(reviews);
  } catch (error) {
    // Return an error response
    return res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

export default {
  createReview,
  getAllReviews
};
