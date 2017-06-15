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

    if (buttonIndex.value === "sqrt("){

        console.log(inputString);
    }

    if (buttonIndex.value === "="){
      // let operationResult = inputString.substring(0,inputString.length-1)
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
