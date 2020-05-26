const Axios = require("axios");

module.exports.get = (url) =>
  Axios.get(url, {
    headers: {
      "Content-type": "application/json",
    },
    validateStatus: () => true,
  });
