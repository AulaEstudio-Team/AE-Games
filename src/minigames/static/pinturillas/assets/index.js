//Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

//Boton de borrar
const clearButton = document.getElementById("clear-button");

//Botones para cambiar de color
const changeColor1 = document.getElementById("color-rojo");
const changeColor2 = document.getElementById("color-amarillo");
const changeColor3 = document.getElementById("color-verde");
const changeColor4 = document.getElementById("color-azul");
const changeColor5 = document.getElementById("color-rosa");
const changeColor6 = document.getElementById("color-morado");
const changeColor7 = document.getElementById("color-negro");

//Botones para cambiar de grosor
const changeGrosor1 = document.getElementById("grosor-1");
const changeGrosor2 = document.getElementById("grosor-2");
const changeGrosor3 = document.getElementById("grosor-3");


let initialX;
let initialY;

const dibujar = (cursorX, cursorY, color) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  //grosor de la linea
  //redondear las esquinas
  context.lineCap = "round";
  //redondear las esquinas de la linea
  context.lineJoin = "round";
  //dibujar la linea
  context.lineTo(cursorX, cursorY);
  //dibujar la linea
  context.stroke();
  initialX = cursorX;
  initialY = cursorY;
};

// Grosor inicial de la linea
context.lineWidth = 20;
// Color inicial del pincel
context.strokeStyle = "#000";

// boton para borrar la pizarra
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
});

// Cambio de color
changeColor1.addEventListener("click", () => {
  context.strokeStyle = " #FF0000"
});

changeColor2.addEventListener("click", () => {
  context.strokeStyle = " #FFFF00"
});

changeColor3.addEventListener("click", () => {
  context.strokeStyle = " #00FF00"
});

changeColor4.addEventListener("click", () => {
  context.strokeStyle = " #0000FF"
});

changeColor5.addEventListener("click", () => {
  context.strokeStyle = " #FF00FF"
});

changeColor6.addEventListener("click", () => {
  context.strokeStyle = " #800080"
});

changeColor7.addEventListener("click", () => {
  context.strokeStyle = " #000000"
});

// Cambio de grosor
changeGrosor1.addEventListener("click", () => {
  context.lineWidth = 10
});

changeGrosor2.addEventListener("click", () => {
  context.lineWidth = 20
});

changeGrosor3.addEventListener("click", () => {
  context.lineWidth = 30
});


const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

//
const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);