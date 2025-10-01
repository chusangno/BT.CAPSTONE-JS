export default class product {
  constructor(product, quantity = 1) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.image = product.image;
    this.quantity = quantity;
  }
}
