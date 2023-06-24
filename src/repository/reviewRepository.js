import Review from '../models/Review.js';

// Repository function to create a new review
export const createReview = async (reviewData) => {
  try {
    const newReview = await Review.create(reviewData);
    return newReview;
  } catch (error) {
    throw new Error('Failed to create review');
  }
};

// Repository function to get all reviews
export const getAllReviews = async () => {
  try {
    const reviews = await Review.findAll();
    return reviews;
  } catch (error) {
    throw new Error('Failed to fetch reviews');
  }
};

export default {
  createReview,
  getAllReviews
};
