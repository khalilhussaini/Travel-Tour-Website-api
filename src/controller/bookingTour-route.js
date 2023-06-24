const { createBooking } = require('./controller/bookingTour-route.js');


module.exports = {
  createBooking: (req, res) => {
    // Retrieve booking details from the request body
    const { tourId, travelDates, participants, requirements } = req.body;

    // Call the repository function to create the booking
    const booking = bookingsRepository.createBooking(
      tourId,
      travelDates,
      participants,
      requirements
    );

    res.json(booking);
  },
};
