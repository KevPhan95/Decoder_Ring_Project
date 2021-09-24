// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const square = {"a":"11", "b":"21", "c":"31", "d":"41", "e":"51", "f":"12", "g":"22", "h":"32", "i":"42", "j":"42",  "k":"52", "l":"13", "m":"23",
                 "n":"33", "o":"43", "p":"53", "q":"14", "r":"24", "s":"34", "t":"44", "u":"54", "v":"15", "w":"25", "x":"35", "y":"45", "z":"55"};

  const iJIncluded = {}
  for (let key in square){
    if (iJIncluded[square[key]]){
      iJIncluded[square[key]] = `${iJIncluded[square[key]]}/${key}`
    }
    else{
      iJIncluded[square[key]] = key;
    }
  }

  function polybius(input, encode = true) {
    // your solution code here
    const lowerCaseInput = input.toLowerCase();
    if (encode === false){
      if (input.replace(" ", "").length % 2 > 0){
        return false;
      }
      else{
        const inputArray = lowerCaseInput.split("");
        const decodeArray = [];
        for (let i = 0; i < inputArray.length; i++){
          if (inputArray[i] === " "){
            decodeArray.push(inputArray[i]);
          }
          else{
            const tens = inputArray[i];
            const one = inputArray[i + 1];
            const letter = Object.keys(square).find((key)=>(square[key] === `${tens}${one}`));
            decodeArray.push(iJIncluded[square[letter]]);
            i++;
          }
        }
        return decodeArray.join("");
      }
    }
    else{
      const inputArray = lowerCaseInput.split("");
      return inputArray.map((element)=>{
        if (element === " "){
          return element;
        }
        else{
          return square[element];
        }
      }).join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
