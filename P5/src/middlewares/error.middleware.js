const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map(
      (validationError) => validationError.message
    );

    return res.status(400).json({
      message: "Los datos proporcionados no son válidos",
      errors: messages,
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      message: "El identificador proporcionado no es válido",
    });
  }

  if (error.code === 11000) {
    return res.status(409).json({
      message: "Ya existe un elemento con esos datos",
    });
  }

  return res.status(500).json({
    message: "Error interno del servidor",
  });
};

module.exports = errorHandler;