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

// STUDENT CODE
generatePassword = () =>{
  result = ""
  let length = prompt("Length? ")
  const upperCase = 'ABCDEFGHIJK'
  let upper = false
  const lowerCase = 'abcdefghijk'
  let lower = false
  const num = '0123456789'
  let numeric = false

  if(length < 8 || length > 128){
    alert('must be between 8 and 128 characters')
  } else {
    upper = confirm('Uppercase? ')
    lower = confirm('Lowercase? ')
    numeric = confirm('Numbers? ')
  } if(upper || lower || numeric){
    let characters = ""
      if(upper){
        characters += upperCase
      }
      if(lower){
        characters += lowerCase
      }
      if(upper && lower){
        characters += upperCase + lowerCase
      }
      if(numeric){
        characters += num
      }
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * characters.length)
      result += characters.charAt(random);
  }
}
  return result
};











