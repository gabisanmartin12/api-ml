const { Item } = require("../models/item");

/**
 * Middleware to parse all the items to the correct format
 */
module.exports.parseItems = (req, res, next) => {
  let categories =
    req.data.categories &&
    req.data.categories.values &&
    req.data.categories.values.length &&
    req.data.categories.values[0].path_from_root &&
    req.data.categories.values[0].path_from_root.length
      ? req.data.categories.values[0].path_from_root.map((cat) => cat.name)
      : [];

  req.data = {
    ...req.data,
    items: req.data.items.map((item) => new Item({ ...item })),
    categories: categories,
  };
  next();
};

/**
 * Middleware to parse the item to the correct format
 */
module.exports.parseItem = (req, res, next) => {
  let item = new Item({ ...req.data.item })
    .setSoldQuantity(req.data.item.sold_quantity)
    .setDescription(req.data.item.description);

  if (req.data.item.pictures.length)
    item.setPicture(req.data.item.pictures[0].secure_url);

  req.data = {
    ...req.data,
    item: item,
  };
  next();
};
