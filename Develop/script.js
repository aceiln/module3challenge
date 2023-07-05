// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  let password = []
  let possibleChars = []

  if (document.getElementById('caps').checked) {
    let newChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    possibleChars = possibleChars.concat(newChars)
    password.push(newChars[Math.floor(Math.random() * newChars.length)])
  }

  if (document.getElementById('lower').checked) {
    let newChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    possibleChars = possibleChars.concat(newChars)
    password.push(newChars[Math.floor(Math.random() * newChars.length)])
  }

  if (document.getElementById('number').checked) {
    let newChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    possibleChars = possibleChars.concat(newChars)
    password.push(newChars[Math.floor(Math.random() * newChars.length)])
  }

  if (document.getElementById('SpecialCharacters').checked) {
    let newChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?']
    possibleChars = possibleChars.concat(newChars)
    password.push(newChars[Math.floor(Math.random() * newChars.length)])
  }

  while (password.length < parseInt(document.getElementById("length").value)) {
    password.push(possibleChars[Math.floor(Math.random() * possibleChars.length)])
    console.log(password)
  }

  return password.join("")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

