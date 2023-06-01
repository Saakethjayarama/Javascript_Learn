(function myfunction(param1 = 5 , pramn = 6){
    console.log(param1*pramn);
})();//self invoking funciton

// ES6 function
const func = (x, y) => {
    console.log(x * y);
}

func(8, 9);


var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  person.fullName.call(person1, "Oslo", "Norway");


  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  person.fullName.apply(person1); 



//   The call() method takes arguments separately.

// The apply() method takes arguments as an array.