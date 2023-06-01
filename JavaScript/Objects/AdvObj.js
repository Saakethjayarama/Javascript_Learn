var obj = {
    name: "Techie",
    age: 20,
    language: "",
    set lang(lang){
        this.language = lang;
    },
    get lang(){
        return this.language;
    }
};

obj.lang = "En";

console.log(obj.lang);
console.log(JSON.stringify(obj));


var obj = { counter: 0};

Object.defineProperty(obj, "reset",
    {set:  function(){this.counter = 0;}
});

Object.defineProperty(obj, "add",
{
    set: function(num){
        this.counter = this.counter + num;
    }
});

Object.defineProperty(obj, "getCounterValue",
{
    get: function(){
        return this.counter;
    }
});

obj.add = 5;

console.log(obj.getCounterValue);