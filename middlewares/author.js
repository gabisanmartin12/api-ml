/**
 * Middleware to add the author to the request data
 */
module.exports.addAuthor = (req, res, next) => {
  req.data = {
    ...req.data,
    author: {
      name: "Gabriel",
      lastname: "San Martín",
    },
  };
  next();
};
