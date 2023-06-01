const student = {
  name: "Saaketh",
  usn: "1JT18CS015",
  getUsn: function () {
    return this.usn;
  },
};

// console.log(student.getUsn());
// returns "1JT18CS015"

const student2 = student.getUsn;
// console.log(student2());
// returns undefined since student2 doesnt know what is this.
// so overcome this problem the student object is bound to student2

const student3 = student.getUsn.bind(student);
console.log(student3());
