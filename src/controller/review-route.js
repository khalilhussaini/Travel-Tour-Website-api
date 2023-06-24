
import express from 'express';
import { createReview, getReviews } from '../controller/review-controller.js';

const router = express.Router();

// Create a new review
router.post('/', createReview);

// Get all reviews
router.get('/', getReviews);

export default router;
