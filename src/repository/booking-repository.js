import Booking from '../model/booking.model.js';

// create sequelize code for getAll, getById, add, update, delete
const getAll = async () => {
  try {
    const bookings = await Booking.findAll();
    return bookings;
  } catch (error) {
    throw new Error('Error retrieving bookings');
  }
};

const getById = async (id) => {
  try {
    const booking = await Booking.findByPk(id);
    return booking;
  } catch (error) {
    throw new Error('Error retrieving booking');
  }
};

const add = async (booking) => {
  try {
    const newbooking = await Booking.create(booking);
    return newbooking;
  } catch (error) {
    throw new Error('Error creating booking');
  }
};

const updateById = async (id, booking) => {
  try {
    const foundbooking = await Booking.findByPk(id);
    if (!foundbooking) {
      return null;
    }
    const updatedbooking = await foundbooking.update(booking, {
      where: { id: id },
    });
    return updatedbooking;
  } catch (error) {
    throw new Error('Error updating booking');
  }
};

const deleteById = async (id) => {
  try {
    const booking = await Booking.destroy({
      where: { id: id },
    });
    return booking;
  } catch (error) {
    throw new Error('Error deleting booking');
  }
};

export default {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
