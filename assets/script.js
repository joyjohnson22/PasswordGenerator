console.log("javascript file loaded")
var genButton = document.getElementById("generatebutton")
var passchar = []
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var specialcharacter = "!@#$%^&*()_+~"
genButton.addEventListener("click", function () {
    var passwordLength = parseInt(prompt("Enter Password Length"));
    console.log("PL", passwordLength)
    if (passwordLength < 8 || passwordLength > 126) {
        alert("Password length must be between 8-126 characters. Please click generate password to begin")
    }
    else {
        var needUpperCase = confirm("Do you like to have uppercase")
        var needLowerCase = confirm("Do you like to have lowercase")
        var needNumber = confirm("Do you like to have numbers")
        var needSpecialChar = confirm("Do you like to have special character")
        if (needUpperCase) {
            passchar += uppercase
        }
        if (needLowerCase) {
            passchar += lowercase
        }
        if (needNumber) {
            passchar += number
        }
        if (needSpecialChar) {
            passchar += specialcharacter
        }
        if (!needUpperCase && !needLowerCase && !needNumber && !needSpecialChar) {
            alert("Please choose one password required character")
        }
        else {
            console.log(passchar)
        }
    }
})