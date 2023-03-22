//Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

const dibujar = (cursorX, cursorY) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  //grosor de la linea
  context.lineWidth = 50;
  //color de la linea
  context.strokeStyle = "#000";
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


