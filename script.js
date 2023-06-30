// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var newCharacter = [];
var passwordArray = [];

function generatePassword() {
  
  // ask for password length input and make a number type
  var passwordLength = parseInt(window.prompt("How long does your password need to be? (between 8-128 characters)"));
  // validate user entry to ensure it is a number and in the correct range
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a number between 8 and 128");
  }

  // confirm character types that user needs
  var upper = window.confirm("Do you want uppercase letters in your password?");
  var lower = window.confirm("Do you want lower case letters in your password?");
  var special = window.confirm("Do you want special characters in your password?");
  var number = window.confirm("Do you want numbers in your password?");

  // identify all possible characters to use in password generation
  var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "\"", , "\#", "\$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


}