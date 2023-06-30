// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  password = passwordLength; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    var passwordLength = window.prompt("How long does your password need to be? (between 8-128 characters)");
    Number(passwordLength);
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("Please enter a number between 8 and 128");
    }

   
}