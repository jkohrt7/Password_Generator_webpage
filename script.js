//Array constants
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")", "-", "_", "+", 
"=","{", "}", "[", "]", "~", ".", "?", "<", ">"];

/* Utility Functions */

//function that displays html with password criteria
function displayCriteria() {
  
}

/* Linking buttons, input tags to logic */
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/* Generate passwords */
//function that uses user criteria to generate a string
function generatePassword() {
  let lengthEntry = document.getElementById("length").value;
  let generatedPassword = "";
  let viableChars = [];

  if(document.getElementById("lowercase").checked){
    viableChars = viableChars.concat(lowercaseCharacters);
  }
  if(document.getElementById("uppercase").checked){
    viableChars = viableChars.concat(uppercaseCharacters);
  }
  if(document.getElementById("numeric").checked) {
    viableChars = viableChars.concat(numericCharacters);
  }
  if(document.getElementById("special").checked) {
    viableChars = viableChars.concat(specialCharacters);
  }

  //Use these character types to construct the string
  for (let i = 0; i < lengthEntry; i++) {
    generatedPassword += viableChars[Math.floor(Math.random() * viableChars.length)];
  }

  return generatedPassword;
}

