var generateBtn = document.querySelector("#generate");
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

function promptUser() {
 
      var passwordLength = parseInt
        (prompt("How many characters do you want your password to contain?"));

      if (passwordLength > 7 && passwordLength < 129)  {
        var conNumbers = confirm("Do you want numbers in your password?");
        var conLowerCases = confirm("Do you want lowercases in your password?");
        var conUpperCases = confirm("Do you want uppercases in your password?");
        var conSpecial = confirm("Do you want special characters in your password?");

        var userInput = {
          passwordLength: passwordLength,
          conNumbers: conNumbers,
          conLowerCases: conLowerCases,
          conUpperCases: conUpperCases,
          conSpecial: conSpecial,
        };
        
        return userInput;
      } 
        else {
        alert("Password must be a number between 8 and 129.")
      }    
}
            function shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex;

              // While there remain elements to shuffle...
              while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }

              return array;
            }

function generatePassword() {
        var inputs = promptUser()
        console.log(inputs)

        var result = [];
        var potentialChars = []
     
       if (inputs.conNumbers) {
         potentialChars = potentialChars.concat(numbers);
        //guaranteedCharacters.push
       } 

       if (inputs.conLowerCase){
        potentialChars = potentialChars.concat(lowerCased);     
       }    

       if (inputs.conUpperCase){
        potentialChars = potentialChars.concat(upperCased);     
       }    

       if (inputs.conSpecial){
        potentialChars = potentialChars.concat(special);     
       }    

       var randomizedArray = shuffle(potentialChars)

       for (var i = 0; i < inputs.passwordLength; i++) {
        result.push(randomizedArray[i])
      }

      return result.join("")

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


