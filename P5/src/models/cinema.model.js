const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del cine es obligatorio"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "La ciudad es obligatoria"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "La dirección es obligatoria"],
      trim: true,
    },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = Cinema;