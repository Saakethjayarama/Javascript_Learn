function add(...nos) {
    let sum = 0;
    nos.forEach((ele) =>{
        sum += ele;
    })
    return sum;
}

console.log(add(10,20,30))