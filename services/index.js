const Axios = require("axios");

module.exports.get = (url) => Axios.get(url, { validateStatus: () => true });
