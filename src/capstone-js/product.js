export default class Products {
  constructor(id, name, price, screen, backCamera, frontCamera, image, desc, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.image = image; 
    this.desc = desc;
    this.type = type;
  }
}
