// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  function alphabetIndex(index , shift){
    let shiftedIndex = (index + shift) % alphabet.length;
    if (shiftedIndex < 0){
      shiftedIndex = shiftedIndex + alphabet.length;
    }
    return alphabet[shiftedIndex];
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (encode === false) shift = shift * -1;
    const lowerCaseInput = input.toLowerCase();
    const inputArray = lowerCaseInput.split("");
    let shiftArray = inputArray.map((element)=>{
      if (alphabet.indexOf(element) === -1){
        return element;
      }
      return alphabetIndex(alphabet.indexOf(element) , shift);
    })  
    return shiftArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };