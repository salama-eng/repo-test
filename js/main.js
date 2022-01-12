function myFunction() {
    // Get the value of the input field with id="numb"
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let url = document.getElementById("url").value;
    let textarea = document.getElementById("textarea").value;

    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 
    
    // If x is Not a Number or less than one or greater than 10
 
    if ( name.length > 0&&name.length < 10) {
        document.getElementById("name_error").innerHTML = "your name is :" + name;
        alert(name.length);

    }
    else {
        document.getElementById("name_error").innerHTML = "Input not valid";

    }


    /***************   ****************/



    if (email.indexOf("@"))
     {
        
        document.getElementById("email-error").innerHTML = "Input ok";

    }
    else {
        document.getElementById("email-error").innerHTML = "Input not valid";

    }
 /*********************** */

    if ( passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ )
     {
        
        document.getElementById("pass1-error").innerHTML = "Input ok";

    }
    else {
        document.getElementById("pass1-error").innerHTML = "Input not valid";

    }
 

    
    if ( age >25)
     {
        
        document.getElementById("age-error").innerHTML = "Input ok";

    }
    else {
        document.getElementById("age-error").innerHTML = "Input not valid";

    }


    if (pass1=!pass2 )
     {
        
        document.getElementById("pass2-error").innerHTML = "Input ok";

    }
    else {
        document.getElementById("pass2-error").innerHTML = "Input not valid";

    }
 
  
  


}




