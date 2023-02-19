function logErrors(error, req, res, next) {
  console.error(error);
  next(error);
};

function errorHanddler(error, req, res, next) {
  if(error) {
    res.status(500).json({
      message: error.message,
      stack: error.stack
    })
  }
  next();
};

function boomErrorHanddler(error, req, res, next) {
  if(error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }
  next()
};

module.exports = { logErrors, errorHanddler, boomErrorHanddler };
