// Example bookings controller
const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
  try {
    // Retrieve the booking data from the request body
    const { name, email, tourType, tourProvince, startDate, numberOfPeople } = req.body;

    // Create a new booking
    const booking = new Booking({
      name,
      email,
      tourType,
      tourProvince,
      startDate,
      numberOfPeople,
    });

    // Save the booking to the database
    await booking.save();

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Booking creation failed' });
  }
};

module.exports = { createBooking };
