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

// gauge element
const gauge = document.getElementById('gauge');

// Substances
document.getElementById('blue').addEventListener('click', changeColor);
document.getElementById('yellow').addEventListener('click', changeColor);
document.getElementById('purple').addEventListener('click', changeColor);
document.getElementById('green').addEventListener('click', changeColor);
document.getElementById('red').addEventListener('click', changeColor);

function changeColor(e){
     if(e.target.id === "blue"){
          document.getElementById("blue").style.fill = activeColor[0];
          
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("green").style.fill = currentColor[3];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[0];
     } 
     else if (e.target.id === "yellow") {
          document.getElementById("yellow").style.fill = activeColor[1];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("green").style.fill = currentColor[3];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[1];
     } 
     else if (e.target.id === "purple") {
          document.getElementById("purple").style.fill = activeColor[2];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("green").style.fill = currentColor[3];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[2];
     } 
     else if (e.target.id === "green") {
          document.getElementById("green").style.fill = activeColor[3];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("red").style.fill = currentColor[4];

          gauge.style.background = activeColor[3];
     }
     else if (e.target.id === "red") {
          document.getElementById("red").style.fill = activeColor[4];
          
          document.getElementById("blue").style.fill = currentColor[0];
          document.getElementById("yellow").style.fill = currentColor[1];
          document.getElementById("purple").style.fill = currentColor[2];
          document.getElementById("green").style.fill = currentColor[3];

          gauge.style.background = activeColor[4];
     }
};