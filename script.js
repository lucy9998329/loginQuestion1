//Set variables based on the element id's
let username = document.querySelector('#username')
let password = document.querySelector('#password')
let confirm_password = document.querySelector('#confirm_password')
let message1 = document.querySelector('#message1')
let message2 = document.querySelector('#message2')
let submit = document.querySelector('#submit')

//Creating a function for username
let ValidateUsername = () => {
    if(username.value.length < 8) {
       message1.innerHTML = "Username must be at least 8 characters long.";
    }
}
//Creating a function for password
let ValidatePassword = () =>{
if (password.value === confirm_password.value ) {
    message2.innerHTML = "Password has been set";
         return true;
    } else {
        message2.innerHTML = "Passwords dont match. Please try again";
        return false;
    }
}