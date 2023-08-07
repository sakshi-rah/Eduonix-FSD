document.getElementById("registrationForm").addEventListener("submit", function (event) {
    var isValid = true;

    var username = document.getElementById("username").value;
    var phoneNo = document.getElementById("phoneNo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var usernameError = document.getElementById("usernameError");
    usernameError.textContent = " ";
    var usernameSuccess = document.getElementById("usernameSuccess");

    var phoneNoError = document.getElementById("phoneNoError");
    phoneNoError.textContent = " ";
    var phoneNoSuccess = document.getAnimations("phoneNoSuccess");

    var emailError = document.getElementById("emailError");
    emailError.textContent = " ";
    var emailSuccess = document.getElementById("emailSuccess");

    var passwordError = document.getElementById("passwordError");
    passwordError.textContent = " ";
    var passwordSuccess = document.getAnimations("passwordSuccess");

    //validation for username
    if (username.trim() === " ") {
        usernameError.textContent = "Enter your correct username";
        isValid = false;
    } else {
        usernameSuccess.textContent = "Correct Username";
    }

    //validation for phone number
    if ((phoneNo.length < 10) || (phoneNo.length > 10)) {
        phoneNoError.textContent = "PhoneNo. must be at least 10 digit number";
        isValid = false;
    } else {
        phoneNoSuccess.textContent = "phone No. verified";
    }

    //validation for Email
    if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Valid email is required";
        isValid = false;
    } else {
        emailSuccess.textContent = "Email verified";
    }

    //validation for Password
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        isValid = false;
    }else{
        passwordSuccess.textContent = "Password verified";
    }



})