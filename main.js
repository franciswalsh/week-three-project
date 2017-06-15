// let buttonPress = document.getElementsByClassName("button");
//
//   let buttonIndex = buttonPress[1];
//   console.log(buttonIndex);
//   buttonIndex.addEventListener("click", displayButton);
//
//   function displayButton(){
//     buttonIndex.style.backgroundcolor = "red";
// };

// let buttonIndex = document.getElementById("clearButton")
//   buttonIndex.addEventListener("click", displayButton);
//
//   function displayButton(){
//     buttonIndex.style.backgroundColor = "red";
// };
let inputArray = [];

let inputArrayBox = document.getElementById("inputString");

let buttonPress = document.getElementsByClassName("button");

for (let i = 0; i < buttonPress.length; i++){
  let buttonIndex = buttonPress[i];
  buttonIndex.addEventListener("click", displayButton);

  function displayButton(event){
    buttonIndex.style.backgroundColor = "red";
    inputArray.push(buttonIndex.innerHTML);
    inputArrayBox.innerHTML = inputArray;
    console.log(inputArray);
    console.log(event);
  }
}


// let specificButton0 = buttonPress[0]
//   specificButton0.addEventListener("click", displayButton0);
//
// let specificButton1 = buttonPress[1]
//   specificButton1.addEventListener("click", displayButton1);
//
// let specificButton2 = buttonPress[2]
//   specificButton2.addEventListener("click", displayButton2);
//
// let specificButton3 = buttonPress[3]
//   specificButton3.addEventListener("click", displayButton3);
//
// let specificButton4 = buttonPress[4]
//   specificButton4.addEventListener("click", displayButton4);
//
// let specificButton5 = buttonPress[5]
//   specificButton5.addEventListener("click", displayButton5);
//
// let specificButton6 = buttonPress[6]
//   specificButton6.addEventListener("click", displayButton6);
//
// let specificButton7 = buttonPress[7]
//   specificButton7.addEventListener("click", displayButton7);
//
// let specificButton8 = buttonPress[8]
//   specificButton8.addEventListener("click", displayButton8);
//
// let specificButton9 = buttonPress[9]
//   specificButton9.addEventListener("click", displayButton9);
//
// let specificButton10 = buttonPress[10]
//   specificButton10.addEventListener("click", displayButton10);
//
// let specificButton11 = buttonPress[11]
//   specificButton11.addEventListener("click", displayButton11);
//
//   function displayButton0(){
//     specificButton0.style.backgroundColor = "green";
//     inputArray.push(3);
//   };
//   function displayButton1(){
//     specificButton1.style.backgroundColor = "red";
//   };
//   function displayButton2(){
//     specificButton2.style.backgroundColor = "red";
//   };
//   function displayButton3(){
//     specificButton3.style.backgroundColor = "red";
//   };
//   function displayButton4(){
//     specificButton4.style.backgroundColor = "red";
//   };
//   function displayButton5(){
//     specificButton5.style.backgroundColor = "red";
//   };
//   function displayButton6(){
//     specificButton6.style.backgroundColor = "red";
//   };
//   function displayButton7(){
//     specificButton7.style.backgroundColor = "red";
//   };
//   function displayButton8(){
//     specificButton8.style.backgroundColor = "red";
//   };
//   function displayButton9(){
//     specificButton9.style.backgroundColor = "red";
//   };
//   function displayButton10(){
//     specificButton10.style.backgroundColor = "red";
//   };
//   function displayButton11(){
//     specificButton11.style.backgroundColor = "red";
//   };

// console.log(inputArray);
inputArrayBox.innerHTML = inputArray;


// for (let i = 0; i < buttonPress.length; i++){
//   let buttonIndex = buttonPress[i];
//   buttonIndex.addEventListener("click", function displayButton(){
//     buttonIndex.style.backgroundcolor = "red";
//
//   });
//
//   console.log(buttonIndex);
// };
