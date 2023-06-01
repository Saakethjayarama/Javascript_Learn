function formSubmit(){
    var text;
    firstName = document.forms.myForm.fname.value;
    if (firstName == null || firstName == ""){
        text = "Enter name!";
    }
    x = document.getElementById("message").innerHTML = "Enter name!";
}