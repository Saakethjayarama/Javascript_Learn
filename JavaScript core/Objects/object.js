var person = {
    name: "Saaketh",
    sex: "M",
    getage: function(){
        return this.age;
    }
};

console.log(person.name);
console.log(person.sex);
console.log(person.age);

person.age = 19;

console.log(person.age);

console.log(person.getage());

delete person.age;
console.log(person.age);

//copying object

var myobj = Object.values(person);