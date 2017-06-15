let inputString = "";
let calculationString = ""
let sqrtCalcString = "";
let calculationArray = [];
let inputSqrtString = "";
let calculationResult = "";
let sqrtString = "";

let inputArrayBox = document.getElementById("userInput");

inputArrayBox.innerHTML = inputString;

let buttonPress = document.getElementsByClassName("button");

for (let i = 0; i < buttonPress.length; i++){
  let buttonIndex = buttonPress[i];
  buttonIndex.addEventListener("click", displayButton);

  function displayButton(event){

    function clearAllButton (){
        inputString = "";
        calculationArray = [];
        calculationString = "";
        inputSqrtString = "";
    }

    calculationArray.push(buttonIndex.value);
    inputString = inputString.concat(buttonIndex.value);
    calculationString = calculationString.concat(buttonIndex.value);
    inputSqrtString = inputSqrtString.concat(buttonIndex.value);

    for (let x = 0; x < calculationArray.length; x++){
      if (calculationArray[x] === "sqrt()"){
        sqrtCalcString = inputSqrtString.substring(6);
        sqrtString = "sqrt(" + sqrtCalcString + ")";
        console.log("this is sqrtString: " + sqrtString);
        inputString = sqrtString;
      }
    }
    if (buttonIndex.value === "="){

      if (calculationArray[0] === "sqrt()"){
        calculationString = Math.sqrt(sqrtCalcString.substring(0,sqrtCalcString.length-1));
        calculationArray = [];
        inputString = calculationString;
        if (buttonIndex.value === "C"){
          clearAllButton();
        }
      }
      else if (calculationArray[calculationArray.length-2] === "^2") {
        let squaringString = calculationString.substring(0,calculationString.length-3);
        calculationString = squaringString * squaringString;

        if (buttonIndex.value === "C"){
          clearAllButton();
        }
      }
      else {
      calculationString = eval(calculationString.substring(0,calculationString.length-1));
      inputSqrtString = inputString;
        if (buttonIndex.value === "C"){
          clearAllButton();
        }
      }
      inputString = calculationString;
    }
    else if (buttonIndex.value === "C"){
      clearAllButton();
    }
    calculationString = calculationString.toString();
    inputString = inputString.toString();
    inputArrayBox.innerHTML = inputString;
  }
}
