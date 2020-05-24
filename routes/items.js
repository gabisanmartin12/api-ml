const express = require("express");
const router = express.Router();
const itemController = require("../controllers/items");
const { addAuthor } = require("../middlewares/author");
const { parseItem, parseItems } = require("../middlewares/items");
const { sendResponse } = require("../middlewares");

// Define routes for item controller
router.get(
  "/items",
  itemController.getAll,
  addAuthor,
  parseItems,
  sendResponse
);
router.get(
  "/items/:id",
  itemController.getById,
  addAuthor,
  parseItem,
  sendResponse
);

module.exports = router;
