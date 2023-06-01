class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static greet(){
        console.log("Hello "+ getName());
    }
}

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }