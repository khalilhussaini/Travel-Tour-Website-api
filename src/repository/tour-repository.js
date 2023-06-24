import Tour from "../model/tour-model.js";
import User from "../model/user-model.js";

const updateTourById = async (tourId, newContent) => {
  return await Tour.update(
    { content: newContent.content, isEdited: true },
    { where: { id: tourId } }
  );
};

const getTourById = async (tourId) => {
  return await Tour.findOne({
    where: {
      id: tourId,
    },
  });
};

const deleteTourById = async (tourId) => {
  return await Tour.destroy({
    where: {
      id: tourId,
    },
  });
};

const getAllTours = async () => {
  return Tour.findAll({
    include: [
      {
        model: User, // include the User model
        attributes: ["firstName"], // specify which user attributes to include
      },
    ],
    attributes: {
      exclude: ["userId"], // we don't need userId anymore because we already have the user's name
    },
  });
};

const addNewTour = async (tour) => {
  return await Tour.create(tour);
};

const getToursByPostId = async (postId) => {
  const tours = await Tour.findAll({
    where: { postId: postId },
  });
  return tours;
};

export default {
  getToursByPostId,
  updateTourById,
  getTourById,
  deleteTourById,
  addNewTour,
  getAllTours,
};
