/**
 * Get the currency symbol for the given code
 * @param {string} Currency code
 * @return {string} Currency symbol. Return the code if it's unknown.
 */
module.exports.getCurrencySymbolByCode = (code) => {
  if (code === "ARS") return "$";
  return code;
};
