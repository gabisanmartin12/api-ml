const service = require("../services/items");

/**
 * Get all items handler
 */
exports.getAll = async (req, res, next) => {
  try {
    req.data = await service.getAll(req.query);
    next();
  } catch (err) {
    res.status(err.status).send(err);
  }
};

/**
 * Get item by id handler
 */
exports.getById = async (req, res, next) => {
  try {
    req.data = await service.getById(req.params.id);
    next();
  } catch (err) {
    res.status(err.status).send(err);
  }
};
