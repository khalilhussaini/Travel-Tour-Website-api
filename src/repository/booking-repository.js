import Booking from '../models/Booking.js';

const createBooking = async (bookingData) => {
  try {
    const booking = await Booking.create(bookingData);
    return booking;
  } catch (error) {
    throw new Error('Error creating booking');
  }
};

const getBookingById = async (bookingId) => {
  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return booking;
  } catch (error) {
    throw new Error('Error retrieving booking');
  }
};

export const bookingRepository = {
  createBooking,
  getBookingById,
};
