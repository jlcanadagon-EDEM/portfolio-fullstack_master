const Cinema = require("../models/cinema.model");

const getCinemas = async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate("movies");
    return res.status(200).json(cinemas);
  } catch (error) {
    return next(error);
  }
};

const getCinemaById = async (req, res, next) => {
  try {
    const cinema = await Cinema.findById(req.params.id).populate("movies");

    if (!cinema) {
      return res.status(404).json({
        message: "Cine no encontrado",
      });
    }

    return res.status(200).json(cinema);
  } catch (error) {
    return next(error);
  }
};

const createCinema = async (req, res, next) => {
  try {
    const cinema = await Cinema.create(req.body);
    const populatedCinema = await cinema.populate("movies");

    return res.status(201).json(populatedCinema);
  } catch (error) {
    return next(error);
  }
};

const updateCinema = async (req, res, next) => {
  try {
    const cinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("movies");

    if (!cinema) {
      return res.status(404).json({
        message: "Cine no encontrado",
      });
    }

    return res.status(200).json(cinema);
  } catch (error) {
    return next(error);
  }
};

const deleteCinema = async (req, res, next) => {
  try {
    const cinema = await Cinema.findByIdAndDelete(req.params.id);

    if (!cinema) {
      return res.status(404).json({
        message: "Cine no encontrado",
      });
    }

    return res.status(200).json({
      message: "Cine eliminado correctamente",
      cinema,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCinemas,
  getCinemaById,
  createCinema,
  updateCinema,
  deleteCinema,
};