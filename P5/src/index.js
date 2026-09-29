require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const movieRouter = require("./routes/movie.routes");
const cinemaRouter = require("./routes/cinema.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API de películas y cines funcionando correctamente",
  });
});

app.use("/api/movies", movieRouter);
app.use("/api/cinemas", cinemaRouter);

app.use((req, res) => {
  return res.status(404).json({
    message: "Ruta no encontrada",
  });
});

app.use(errorHandler);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
  });
};

startServer();