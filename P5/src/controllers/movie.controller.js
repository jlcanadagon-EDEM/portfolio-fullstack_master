const Movie = require("../models/movie.model");

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    return res.status(201).json(movie);
  } catch (error) {
    return next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!movie) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    return res.status(200).json({
      message: "Película eliminada correctamente",
      movie,
    });
  } catch (error) {
    return next(error);
  }
};
const getMoviesByTitle = async (req, res, next) => {
  try {
    const movies = await Movie.find({
      title: { $regex: req.params.title, $options: "i" },
    });

    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

const getMoviesByGenre = async (req, res, next) => {
  try {
    const movies = await Movie.find({
      genre: { $regex: req.params.genre, $options: "i" },
    });

    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

const getMoviesFromYear = async (req, res, next) => {
  try {
    const movies = await Movie.find({
      year: { $gte: Number(req.params.year) },
    });

    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getMovies,
  getMovieById,
  getMoviesByTitle,
  getMoviesByGenre,
  getMoviesFromYear,
  createMovie,
  updateMovie,
  deleteMovie,
};