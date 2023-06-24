 
import  createBooking from './booking-controller.js';


// Controller to handle booking submission
const createBooking = async (req, res) => {
  try {
    // Extract the form data from the request body
    const { name, email, tourType, tourProvince, startDate, numberOfPeople } = req.body;

    // Create a new booking object
    const newBooking = new Booking({
      name,
      email,
      tourType,
      tourProvince,
      startDate,
      numberOfPeople
    });

    // Save the booking to the database
    await newBooking.save();

    // Return a success response
    return res.status(200).json({ message: 'Booking submitted successfully' });
  } catch (error) {
    // Return an error response
    return res.status(500).json({ error: 'Failed to submit booking' });
  }
};


export default createBooking 