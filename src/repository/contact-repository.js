import Contact from '../model/contact.model.js';

const getAll = async () => {
  try {
    const contacts = await Contact.findAll();
    return contacts;
  } catch (error) {
    throw new Error('Error retrieving contacts');
  }
};

const getById = async (id) => {
  try {
    const contact = await Contact.findByPk(id);
    return contact;
  } catch (error) {
    throw new Error('Error retrieving contact');
  }
};

const add = async (contact) => {
  try {
    const newContact = await Contact.create(contact);
    return newContact;
  } catch (error) {
    throw new Error('Error creating contact');
  }
};

const updateById = async (id, contact) => {
  try {
    const foundContact = await Contact.findByPk(id);
    if (!foundContact) {
      return null;
    }
    const updatedContact = await foundContact.update(contact, {
      where: { id: id },
    });
    return updatedContact;
  } catch (error) {
    throw new Error('Error updating contact');
  }
};

const deleteById = async (id) => {
  try {
    const contact = await Contact.destroy({
      where: { id: id },
    });
    return contact;
  } catch (error) {
    throw new Error('Error deleting contact');
  }
};

export default {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
 