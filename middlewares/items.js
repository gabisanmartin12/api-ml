const { Item } = require("../models/item");

/**
 * Middleware to parse all the items to the correct format
 */
module.exports.parseItems = (req, res, next) => {
  req.data = {
    ...req.data,
    ...req.data.items.reduce(
      (result, item) => {
        if (!result.categories.includes(item.category_id))
          result.categories.push(item.category_id);
        result.items.push(new Item({ ...item }));
        return result;
      },
      {
        categories: [],
        items: [],
      }
    ),
  };
  next();
};

/**
 * Middleware to parse the item to the correct format
 */
module.exports.parseItem = (req, res, next) => {
  req.data = {
    ...req.data,
    item: new Item({ ...req.data.item })
      .setSoldQuantity(req.data.item.sold_quantity)
      .setDescription(req.data.item.description),
  };
  next();
};
