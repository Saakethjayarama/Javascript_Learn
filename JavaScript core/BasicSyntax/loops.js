// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


//For Loop
var i;
for (i = 0 ; i < 10; i++){
    console.log(i);
}

//while
while(i > 0){
    console.log(i);
    i--;
}

//Do While
do{
    i++;
    console.log(i);
}while(i < 10);

student = {
    usn : "1JT18CS015",
    name : "Saaketh",
    phone : "7406254072"
};

//For/in

var s;
for( s in student){
    console.log(s+ ": "+student[s]);
}

students = ["gagana", "saaketh", "dhanush", "hema", "sumana"];
for (s of students){
    console.log(s);
}

//continue and break works just like in other language
