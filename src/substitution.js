// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function duplicateAlphabet(alphabet){
    return alphabet.some((element)=>{
      return alphabet.filter((index) => element === index).length > 1;
    });
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;
    const lowerCaseInput = input.toLowerCase();
    const inputArray = lowerCaseInput.split("");
    const lowerCaseAlphabet = alphabet.toLowerCase();
    const alphabetArray = lowerCaseAlphabet.split("");
    if (duplicateAlphabet(alphabetArray)) return false;
    if (encode === false){
      return inputArray.map((element)=>{
        if (element === " "){
          return element;
        }
        else{
          let letter = alphabetArray.find((index)=> index === element);
          return realAlphabet[alphabetArray.indexOf(letter)];
        }
      }).join("");
    }
    else{
      return inputArray.map((element)=>{
        if (element === " "){
          return element;
        }
        else{
          let letter = realAlphabet.find((letter)=> letter === element);
          return alphabetArray[realAlphabet.indexOf(letter)];
        }
      }).join("")
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
