class Item {
  constructor({
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    ...extra
  }) {
    this.id = id;
    this.title = title;
    this.price = {
      currency: currency_id,
      amount: price,
      decimals: "...",
    };
    this.picture = thumbnail;
    this.condition = condition;
    this.free_shipping = extra.shipping.free_shipping;
  }

  setDescription(desription) {
    this.desription = desription;
    return this;
  }

  setSoldQuantity(soldQuantity) {
    this.sold_quantity = soldQuantity;
    return this;
  }
}

module.exports = {
  Item: Item,
};
