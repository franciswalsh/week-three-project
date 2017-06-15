let inputString = "";
let calculationString = ""
let sqrtCalcString = "";
let calculationArray = [];
let inputSqrtString = "";
let calculationResult = "";
let storeAnwers = "";

let inputArrayBox = document.getElementById("userInput");

inputArrayBox.innerHTML = inputString;

let buttonPress = document.getElementsByClassName("button");

for (let i = 0; i < buttonPress.length; i++){
  let buttonIndex = buttonPress[i];
  buttonIndex.addEventListener("click", displayButton);

  function displayButton(event){

    if (buttonIndex.value != "ans"){

    calculationArray.push(buttonIndex.value);
    inputString = inputString.concat(buttonIndex.value);
    calculationString = calculationString.concat(buttonIndex.value);
    inputSqrtString = inputSqrtString.concat(buttonIndex.value);
  }
    // if (buttonIndex.value === ")"){
    //
    //     inputString = Math.sqrt(inputString.substring(inputString.length-3,inputString.length-1));
    // }
    for (let x = 0; x < calculationArray.length; x++){
      if (calculationArray[x] === "sqrt()"){
        sqrtCalcString = inputSqrtString.substring(6);
        let sqrtString = "sqrt(" + sqrtCalcString + ")"
        calculationString = sqrtString;
        inputString = calculationString;
      }
      // else {
      //   console.log("there is no square root");
      // }
    }

    if (buttonIndex.value === "="){

      if (calculationArray[0] === "sqrt()"){
        inputString = Math.sqrt(sqrtCalcString.substring(0,sqrtCalcString.length-1));
        calculationArray = [];
        // caclulationString = inputString;
        inputSqrtString = inputString;
        // inputString = inputSqrtString;
      }
      else {
      inputString = eval(calculationString.substring(0,calculationString.length-1));
      inputSqrtString = inputString;
        if (buttonIndex.value === "C"){
          inputString = "";
        }
      }
    }
    else if (buttonIndex.value === "C"){
      inputString = "";
      calculationArray = [];
      calculationString = "";
      inputSqrtString = "";
    }

// -----------------------------------------------------------------------------
    // else if (buttonIndex.value === "ans"){
    //   storeAnwers = inputString;
    //   calculationArray = [];
    //   calculationString = "";
    //   // inputString = "";
    //   console.log(storeAnwers);
    // }
// ---------------------------------------------------------------------------
    inputString = inputString.toString();
    inputSqrtString = inputSqrtString.toString();
    calculationString = inputString;
    // console.log("inputString: " + inputString);
    // console.log("inputSqrtString: " + inputSqrtString);
    // console.log("calculationArray: " + calculationArray);
    // console.log("calculationString: " + calculationString);
    inputArrayBox.innerHTML = inputString;


  }
}
