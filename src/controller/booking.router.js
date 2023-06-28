import express from "express";
import bookingRepository from "../repository/booking-repository.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    bookings = await bookingRepository.getAll();
    res.status(200).send(bookings);
  } catch (error) {
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const booking = req.body;
    const newbooking = await bookingRepository.add(booking);
    res.status(201).send(newbooking);
  } catch (error) {
    console.error(error);
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const booking = await bookingRepository.getById(req.params.id);
    if (!booking) return res.status(404).send({ msg: "booking not found" });
    res.status(200).send(booking);
  } catch (error) {
    console.error(error);
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

// Update a booking by id
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedbooking = req.body;
    const booking = await bookingRepository.updateById(id, updatedbooking);
    if (!booking) {
      return res.status(404).send({ msg: "booking not found" });
    }
    res.status(200).send(booking);
  } catch (error) {
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

// Delete a booking by id
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await bookingRepository.deleteById(id);
    res.status(200).json({ msg: `booking with id ${id} was deleted` });
  } catch (error) {
    console.error(error);
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

export default router;
