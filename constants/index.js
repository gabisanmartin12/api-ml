require("dotenv").config();
const { URLS } = require("./urls");

module.exports = {
  PORT: process.env.PORT || 8080,
  SITE_ID: process.env.SITE_ID,
  URLS,
};
