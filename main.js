// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];




  
  // Function to prompt user for password options
  function getPasswordOptions() {
    let passLength = prompt("Type password that is at least 8 Characters but no more than 128");
    let lowerCase = confirm("Do you want to include lowercase letters?");
    let upperCase = confirm("Do you want to include uppercase letters?");
    let numeric = confirm("Do you want to include numbers?");
    let specialChar = confirm("Do you want to include special characters?");
  }

 // Checking user input is valid
 function userInput() {
  if (!(Number.isInteger(passLength)) || (passLength < 8) || (passLength > 128)) {
    passLength = prompt("Not valid password length. Please enter an acceptable number.");
  }else if ((numeric === false) && (specialChar === false) && (lowerCase === false) && (upperCase === false)) {
    alert("Include at least one character type!")
    getPasswordOptions();
  }
 }
  
  // Function for getting a random element from an array
  function getRandom(arr) {

  }
  
  // Function to generate password with user input
  function generatePassword() {
    getPasswordOptions();
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);