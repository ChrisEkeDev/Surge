const { validationResult } = require('express-validator');

const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = {};
      validationErrors.array().forEach(error => errors[error.path] = error.msg);
      const err = Error("One or more of your validation checks failed.");
      err.errors = errors;
      err.status = 400;
      err.title = "Validation Error.";
      next(err);
    }
    next();
  };

  module.exports = { handleValidationErrors };
