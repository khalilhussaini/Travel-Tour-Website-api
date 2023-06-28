import express from "express";
import contactRepository from "../repository/contact-repository.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactRepository.getAll();
    res.status(200).send(contacts);
  } catch (error) {
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const contact = req.body;
    const newContact = await contactRepository.add(contact);
    res.status(201).send(newContact);
  } catch (error) {
    console.error(error);
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const contact = await contactRepository.getById(req.params.id);
    if (!contact) return res.status(404).send({ msg: "Contact not found" });
    res.status(200).send(contact);
  } catch (error) {
    console.error(error);
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedContact = req.body;
    const contact = await contactRepository.updateById(id, updatedContact);
    if (!contact) {
      return res.status(404).send({ msg: "Contact not found" });
    }
    res.status(200).send(contact);
  } catch (error) {
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await contactRepository.deleteById(id);
    res.status(200).json({ msg: `Contact with id ${id} was deleted` });
  } catch (error) {
    console.error(error);
    next({ status: 500, message: `Internal Server Error: ${error}` });
  }
});

export default router;
