const { getCurrencySymbolByCode } = require("../utils");

class Item {
  constructor({
    id,
    title,
    currency_id,
    price,
    condition,
    thumbnail,
    ...extra
  }) {
    this.id = id;
    this.title = title;
    let [amount, decimals] = price
      .toFixed(2)
      .toString()
      .split(".")
      .map((part) => parseInt(part));
    this.price = {
      currency: getCurrencySymbolByCode(currency_id),
      amount: amount,
      decimals: decimals,
    };
    this.picture = thumbnail;
    this.condition = condition;
    this.free_shipping = extra.shipping.free_shipping;
  }

  setDescription(desription) {
    this.description = desription;
    return this;
  }

  setSoldQuantity(soldQuantity) {
    this.sold_quantity = soldQuantity;
    return this;
  }

  setPicture(url) {
    this.picture = url;
    return this;
  }
}

module.exports = {
  Item: Item,
};
