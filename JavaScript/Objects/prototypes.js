function Person(name, sex, age){
    this.name = name;
    this.sex = sex;
    this.age = age;
}

var obj = new Person("Saaketh", "M", 10);
console.log(JSON.stringify(obj));

var emp = {};
emp.bio = obj;

console.log(emp);