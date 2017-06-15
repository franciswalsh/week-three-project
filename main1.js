let inputString = "";
let calculationArray = [];
let calculationResult = "";

let inputArrayBox = document.getElementById("userInput");

inputArrayBox.innerHTML = inputString;

let buttonPress = document.getElementsByClassName("button");

for (let i = 0; i < buttonPress.length; i++){
  let buttonIndex = buttonPress[i];
  buttonIndex.addEventListener("click", displayButton);

  function displayButton(event){

    calculationArray.push(buttonIndex.value);
    inputString = inputString.concat(buttonIndex.value);

    if (buttonIndex.value === ")"){

        inputString = Math.sqrt(inputString.substring(inputString.length-3,inputString.length-1));
    }

    if (buttonIndex.value === "="){

      // for (let k in calculationArray){
      //   if (calculationArray[k] === "sqrt("){
      //     let tempString = Math.sqrt(inputString.substring(inputString.length-3,inputString.length-1));
      //     inputString = inputString.concat(tempString);
      //   }
      // }

      inputString = eval(inputString.substring(0,inputString.length-1));
      if (buttonIndex.value === "C"){
        inputString = "";
      }
    }
    else if (buttonIndex.value === "C"){
      inputString = "";
    }
    inputString = inputString.toString();
    inputArrayBox.innerHTML = inputString;

  }
}
