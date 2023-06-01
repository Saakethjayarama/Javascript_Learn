function load(){
    document.getElementById("main").innerHTML = "Hello Techie";
}

function toUpper(){
    x = document.getElementById("name").value;
    console.log(x);
    y = x.toUpperCase();
    document.getElementById("name").value = y;
}   

function clicked(){
    alert('Clicked');
}

function mouseover(){
    x = document.getElementById("btn-mouse").style.display = "none";
}

function mouseout(){
    x = document.getElementById("btn-mouse").style.display = "block";
}

function keydown(){
    alert('Dont fkn press anything on keyboard');
}
