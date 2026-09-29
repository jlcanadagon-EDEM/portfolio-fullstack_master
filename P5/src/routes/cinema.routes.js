const express = require("express");
const {
  getCinemas,
  getCinemaById,
  createCinema,
  updateCinema,
  deleteCinema,
} = require("../controllers/cinema.controller");

const cinemaRouter = express.Router();

cinemaRouter.get("/", getCinemas);
cinemaRouter.get("/:id", getCinemaById);
cinemaRouter.post("/", createCinema);
cinemaRouter.put("/:id", updateCinema);
cinemaRouter.delete("/:id", deleteCinema);

module.exports = cinemaRouter;