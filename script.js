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
  // user must enter preferences: 
    //prompt how many characters
    // validate it is between 8-128
    // var for characters length 

    // object for type of character
    // special, number, upper, lower, use confirm 

  // validation:  
  // -- if user hit cancel -> alert message
  // -- if user enters number outside of 8-128, alert that not within 
  // --if user doesn't select one of the four other criteria, --alert message that at least one character type should be selected 

  // Create arrays for each character type

// take all true arrays and concat into new array
// choose random chars from arr based on user input
// var push into new array 
// var password = array.toString() 

// return password; 
}