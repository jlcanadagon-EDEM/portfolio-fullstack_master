const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "El título es obligatorio"],
      trim: true,
    },
    director: {
      type: String,
      required: [true, "El director es obligatorio"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "El año es obligatorio"],
      min: [1888, "El año no puede ser anterior a 1888"],
    },
    genre: {
      type: String,
      required: [true, "El género es obligatorio"],
      trim: true,
    },
    duration: {
      type: Number,
      min: [1, "La duración debe ser superior a cero"],
    },
    synopsis: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;