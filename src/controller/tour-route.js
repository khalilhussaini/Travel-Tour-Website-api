import { searchTours, getTourDetails, bookTour } from '../repositories/tourRepository.js';

// Search tours
const searchToursHandler = async (req, res, next) => {
  try {
    const { destination, dates, duration } = req.query;
    const tours = await searchTours(destination, dates, duration);
    res.json(tours);
  } catch (error) {
    next(error);
  }
};

// Get tour details
const getTourDetailsHandler = async (req, res, next) => {
  try {
    const { tourId } = req.params;
    const tour = await getTourById(tourId);
    res.json(tour);
  } catch (error) {
    next(error);
  }
};

// Book tour
const bookTourHandler = async (req, res, next) => {
  try {
    const { tourId } = req.params;
    const { dates, participants, requirements } = req.body;
    const bookingConfirmation = await bookTour(tourId, dates, participants, requirements);
    res.json({ message: bookingConfirmation });
  } catch (error) {
    next(error);
  }
};

export { searchToursHandler as searchTours, getTourDetailsHandler as getTourDetails, bookTourHandler as bookTour };
