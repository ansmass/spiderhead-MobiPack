// colors
const currentColor = [
     "#11506B", // currentColor[0]
     "#8C8E1F", // currentColor[1]
     "#5D3E66", // currentColor[2]
     "#1F491F", // currentColor[3]
     "#771D06" // currentColor[4]
];
const activeColor = [
     "#1C7EA9", // activeColor[0]
     "#d0d326", // activeColor[1]
     "#A26DB0", // activeColor[2]
     "#4CA94A", // activeColor[3]
     "#C1330F" // activeColor[4]
];

// Texts
const substanceName = [
     "N-40",
     "B-15",
     "G-46",
     "I-16",
     "B-6"
];
const effectName = [
     `"Luvactin"`,
     `"Verbaluce"`,
     `"Laffodil"`,
     `"Darkenfloxx"`,
     `"Obedix"`
];

// application elements
const gauge = document.getElementById('gauge');
const range = document.querySelector('.rs-range-color');
const substance = document.getElementById('substance');
const effect = document.getElementById('effect');

// Substances
document.getElementById('blue').addEventListener('click', changeColor);
document.getElementById('yellow').addEventListener('click', changeColor);
document.getElementById('purple').addEventListener('click', changeColor);
document.getElementById('green').addEventListener('click', changeColor);
document.getElementById('red').addEventListener('click', changeColor);

function changeColor(c){
     if(c.target.id === "blue"){
          document.getElementById("blue").style.fill = activeColor[0];
          
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("green").style.fill = currentColor[3];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[0];
          range.style.background = activeColor[0];

          substance.innerText = substanceName[0];
          effect.innerText = effectName[0];
     } 
     else if (c.target.id === "yellow") {
          document.getElementById("yellow").style.fill = activeColor[1];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("green").style.fill = currentColor[3];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[1];
          range.style.background = activeColor[1];

          substance.innerText = substanceName[1];
          effect.innerText = effectName[1];
     } 
     else if (c.target.id === "purple") {
          document.getElementById("purple").style.fill = activeColor[2];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("green").style.fill = currentColor[3];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[2];
          range.style.background = activeColor[2];

          substance.innerText = substanceName[2];
          effect.innerText = effectName[2];
     } 
     else if (c.target.id === "green") {
          document.getElementById("green").style.fill = activeColor[3];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[3];
          range.style.background = activeColor[3];

          substance.innerText = substanceName[3];
          effect.innerText = effectName[3];
     }
     else if (c.target.id === "red") {
          document.getElementById("red").style.fill = activeColor[4];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("green").style.fill = currentColor[3];

          gauge.style.background = activeColor[4];
          range.style.background = activeColor[4];

          substance.innerText = substanceName[4];
          effect.innerText = effectName[4];
     }
};