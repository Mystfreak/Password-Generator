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
    let passLength = prompt("Type password that is at least 8 Characters but no more than 128.");

// Looping if password length conditions not met.
    while ((passLength < 8) || (passLength > 128)) {
      alert("Please type in an acceptable password length.");
      passLength = prompt("Type password that is at least 8 characters but no more than 128.");
    }
    // confirming character types
      let lowerCase = confirm("Do you want to include lowercase letters?");
      let upperCase = confirm("Do you want to include uppercase letters?");
      let numeric = confirm("Do you want to include numbers?");
      let specialChar = confirm("Do you want to include special characters?");

      // if no character type is selected then reconfirm character types again.
      while ((lowerCase === false) && (upperCase === false) && (numeric === false) && (specialChar === false)) {
        alert("No character type was selected, please try again.")
        lowerCase = confirm("Do you want to include lowercase letters?");
        upperCase = confirm("Do you want to include uppercase letters?");
        numeric = confirm("Do you want to include numbers?");
        specialChar = confirm("Do you want to include special characters?");
  
      }

}
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    let randomArray = Math.floor(Math.random() * arr.length);
    return arr[randomArray];
    
  }
  
  // Function to generate password with user input
  function generatePassword() {
    let finalResult = [];
    let userOption = getPasswordOptions();

    let getPass =[];


// Gets the arrays provided if user options are true.
    if (userOption.lowerCase) {
      getPass = getPass.concat(lowerCasedCharacters);
    }
     if (userOption.upperCase) {
      getPass = getPass.concat(upperCasedCharacters);
    }
     if (userOption.numeric) {
      getPass = getPass.concat(numericCharacters);
    }
     if (userOption.specialChar) {
      getPass = getPass.concat(specialCharacters);
    }

    //Gives Random password based on length and character types selected.
    for (let i = 0; i < userOption.length; i++) {

      finalResult.push(getRandom(getPass));

    }

    let passWord = finalResult.join('');
    
    return passWord;
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