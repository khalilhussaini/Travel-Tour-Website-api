import express from 'express';
import createBooking from '../controller/booking-controller.js';

const router = express.Router();

// Route to handle booking submission
router.post('/', createBooking);

export default router;
