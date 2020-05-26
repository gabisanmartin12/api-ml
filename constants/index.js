require("dotenv").config();
const { URLS } = require("./urls");

module.exports = {
  ALLOWED_ORIGINS: ["http://localhost:3000", process.env.APP_URL],
  PORT: process.env.PORT || 8080,
  SITE_ID: process.env.SITE_ID,
  URLS,
};
