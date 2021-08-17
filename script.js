//Creator factory and objects

/*CharacterCreator--generate characters from a char array and become 'active' when corresponding HTML checkbox is checked
  String id: the html id of the corresponding checkbox.
  char array characters: the array of characters the object can randomly select from. */
function CharacterCreator(id, characters) {
  this.id = id;
  this.isActive = document.querySelector(id).checked;
  this.characters = characters;

  this.makeRandChar = function() {
    return this.characters[Math.floor(Math.random() * characters.length)];
  };
}

//one characerCreator for each character criteria checkbox in index.html
let lowercaseCreator = new CharacterCreator("#lowercase", ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);

let uppercaseCreator = new CharacterCreator("#uppercase", ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);

let numericCreator = new CharacterCreator("#numeric", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

let specialCreator = new CharacterCreator("#special", ["!", "@", "#", "$", "%", "^", "&", "*",
"(", ")", "-", "_", "+", "=","{", "}", "[", "]", "~", ".", "?", "<", ">"]);

let criteriaArray = [lowercaseCreator,uppercaseCreator,numericCreator,specialCreator];


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

  //update isActive values
  criteriaArray.map(charCreator => charCreator.isActive = document.querySelector(charCreator.id).checked);

  //filter out unchecked character types
  let filteredCriteria = criteriaArray.filter(charCreator => charCreator.isActive);

  //Use these character types to construct the string
  for (let i = 0; i < lengthEntry; i++) {
    console.log("hey")
    generatedPassword = generatedPassword + filteredCriteria[Math.floor(Math.random() * filteredCriteria.length)].makeRandChar();
  }

  return generatedPassword;
}

