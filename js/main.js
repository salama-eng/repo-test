function myFunction() {
    // Get the value of the input field with id="numb"
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var url = document.getElementById("url").value;
    var textarea = document.getElementById("textarea").value;


    // If x is Not a Number or less than one or greater than 10
    var name_error,emailerror;
    if (name.length < 10 && name.length > 0) {
        name_error = "your name is :" + name;
    }
    else {
        name_error = "Input not valid";

    }
    document.getElementById("name_error").innerHTML = name_error;


    

if (email.indexOf("@") > 0) {
    emailerror = "invaild email";
}
else {
    emailerror = "Input not valid";

}
document.getElementById("name_error").innerHTML = emailerror;


}




