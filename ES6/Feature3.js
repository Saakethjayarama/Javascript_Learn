/*
    Classes
*/

/*
    Classes are defined using class keyword
    constructor is used to initialize the properties
    constructor method is initialized before each method is called
*/

class Car {
  constructor(model = "RR", price = "200k") {
    this.model = model;
    this.price = price;
  }

  setPrice = (price) => {
    this.price = price;
  };

  setModel = (model) => {
    this.model = model;
  };

  getPrice = () => this.price;
  getModel = () => this.model;
}

const fun = () => {
  const car = new Car();
  console.log(car.model);
  console.log(car.price);
};

fun();
