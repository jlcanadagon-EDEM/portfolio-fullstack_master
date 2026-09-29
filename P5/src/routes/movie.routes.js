const express = require("express");
const {
  getMovies,
  getMovieById,
  getMoviesByTitle,
  getMoviesByGenre,
  getMoviesFromYear,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");

const movieRouter = express.Router();

movieRouter.get("/", getMovies);
movieRouter.get("/title/:title", getMoviesByTitle);
movieRouter.get("/genre/:genre", getMoviesByGenre);
movieRouter.get("/year/:year", getMoviesFromYear);
movieRouter.get("/:id", getMovieById);

movieRouter.post("/", createMovie);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);

module.exports = movieRouter;