class Student {
  constructor(name, usn) {
    this.name = name;
    this.usn = usn;
  }

  getUsn() {
    return this.usn;
  }
}

const student = new Student("Saaketh", "1JT18CS015");
console.log(student.getUsn());

const student2 = student.getUsn;
// console.log(student2());
// raises typeerr since student2 doesnt know this
// so to solve this bind is used

const student3 = student.getUsn.bind(student);
console.log(student3());
