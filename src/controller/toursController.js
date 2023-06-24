import Tour from '../model/tour';

export const searchTours = async (req, res, next) => {
  try {
    const { destination, dates, duration, filters } = req.query;

    // Implement your search logic here
    // Example: Fetch tours from the database based on the provided search parameters
    const tours = await Tour.find({
      destination,
      dates,
      duration,
      filters,
    });

    return res.status(200).json(tours);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
};
