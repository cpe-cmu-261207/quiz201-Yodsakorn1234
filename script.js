const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML == "Show Calculation"){
btn_toggle.innerHTML = "Author";
}
else btn_toggle.innerHTML = "Show Calculaion"
}
const wordCut = (str) => {
  let arrText = [];
  const word = str.split(" ");
  arrText.push(word);
  return arrText;
}
const textOverLength = wordCut(tempText);
const textCutted = wordCut(tempText);
for(let i=0; i < 320; i++){
}

