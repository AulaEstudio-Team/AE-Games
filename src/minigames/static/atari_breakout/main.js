"use strict";

const HEIGHT = 400;
const WIDTH = 800;
const BALL = 10;
let puntuacion = 0;

const POS_INICIAL = { x: WIDTH / 2, y: HEIGHT / 2 };
const mapa = document.getElementById("mapa");
const ctx = mapa.getContext("2d");
const SPEED = 4;
let TRAMPOLIN_LENGTH = 80;
const POS_INICIAL_TRAMP = { x: WIDTH / 2 - TRAMPOLIN_LENGTH, y: HEIGHT - HEIGHT / 6 }


const cubos = [];
crearCubos();
console.log(cubos);

const movimiento = {
    x: 0,
    y: 4
}

function movimientoAleatorio() {
    let random_move = {
        x: Math.random() * (SPEED * 2) - SPEED,
        y: Math.random() * ((-SPEED - 2) + SPEED) - SPEED
    }
    return random_move;
}

function tick() {
    let choca = false;
    let puntos = document.getElementById("puntuacion");

    const newx = POS_INICIAL.x + movimiento.x;
    const newy = POS_INICIAL.y + movimiento.y;

    POS_INICIAL.x = newx;
    POS_INICIAL.y = newy;
    const pixel_down_left = ctx.getImageData(newx - BALL * 1.1, newy + BALL * 1.1, 1, 1);
    const pixel_down_right = ctx.getImageData(newx + BALL * 1.1, newy + BALL * 1.1, 1, 1);
    const pixel_up_left = ctx.getImageData(newx - BALL * 1.1, newy - BALL * 1.1, 1, 1);
    const pixel_up_right = ctx.getImageData(newx + BALL * 1.1, newy - BALL * 1.1, 1, 1);
    const data_up_left = pixel_up_left.data;
    const data_up_right = pixel_up_right.data;
    const data_down_left = pixel_down_left.data;
    const data_down_right = pixel_down_right.data;
    const rgba_up_left = `rgba(${data_up_left[0]}, ${data_up_left[1]}, ${data_up_left[2]}, ${data_up_left[3] / 255})`;
    const rgba_up_right = `rgba(${data_up_right[0]}, ${data_up_right[1]}, ${data_up_right[2]}, ${data_up_right[3] / 255})`;
    const rgba_down_left = `rgba(${data_down_left[0]}, ${data_down_left[1]}, ${data_down_left[2]}, ${data_down_left[3] / 255})`;
    const rgba_down_right = `rgba(${data_down_right[0]}, ${data_down_right[1]}, ${data_down_right[2]}, ${data_down_right[3] / 255})`;

    if (newx > WIDTH - BALL || newx - BALL < 0) {
        movimiento.x = - movimiento.x;
    }
    if (newy > HEIGHT - BALL || newy - BALL < 0) {
        movimiento.y = - movimiento.y;
    }
    //Colision contra barrera
    if (newy > POS_INICIAL_TRAMP.y - BALL - 3 && newx > POS_INICIAL_TRAMP.x - BALL * 2 && newx < POS_INICIAL_TRAMP.x + TRAMPOLIN_LENGTH * 2 + BALL * 2) {
        if (TRAMPOLIN_LENGTH > 25) {
            TRAMPOLIN_LENGTH -= 1;
        }
        if (newy > POS_INICIAL_TRAMP.y - BALL - 3 && newx > POS_INICIAL_TRAMP.x - BALL * 2 + (TRAMPOLIN_LENGTH / 1.2) && newx < POS_INICIAL_TRAMP.x + TRAMPOLIN_LENGTH * 2 + BALL * 2 - (TRAMPOLIN_LENGTH / 1.2)) {
            movimiento.y = movimientoAleatorio().y;
        } else if (newy > POS_INICIAL_TRAMP.y - BALL - 3 && newx > POS_INICIAL_TRAMP.x - BALL * 2 && newx < POS_INICIAL_TRAMP.x + (TRAMPOLIN_LENGTH / 1.2)) {
            movimiento.y = -movimiento.y * 1.1;
            movimiento.x = -8;
            console.log('-movimiento.x - SPEED', -movimiento.x - SPEED)
        } else if (newy > POS_INICIAL_TRAMP.y - BALL - 3 && newx > POS_INICIAL_TRAMP.x + TRAMPOLIN_LENGTH * 2 + BALL * 2 - (TRAMPOLIN_LENGTH / 1.2) && newx < POS_INICIAL_TRAMP.x + TRAMPOLIN_LENGTH * 2 + BALL * 2) {
            movimiento.y = -movimiento.y * 1.1;
            movimiento.x = 8;
        }else{
            
        }
    }
    //Colision contra bloques
    let purple = "rgba(145, 97, 201, 1)";
    if (rgba_up_right == purple && rgba_up_left == purple) {
        movimiento.y = - movimiento.y;
        choca = true;
        console.log('newy', newy)
    } else if (rgba_up_right == purple && rgba_down_right == purple) {
        movimiento.x = -movimiento.x;
        choca = true;
    } else if (rgba_up_left == purple && rgba_down_left == purple) {
        movimiento.x = -movimiento.x;
        choca = true;
    } else if (rgba_up_right == purple) {
        movimiento.y = - movimiento.y;
        choca = true;
    } else if (rgba_up_left == purple) {
        movimiento.y = - movimiento.y;
        choca = true;
    }
    if (newy > POS_INICIAL_TRAMP.y + BALL) {
        return false;
    }
    let i = 0;
    for (let cubo of cubos) {
        if (choca && newx + BALL * 1.1 > cubo.x && newx - BALL * 1.1 < cubo.x + cubo.width) {
            cubos[i].width = 0;
            cubos[i].height = 0;
            puntuacion += 10;
            puntos.innerHTML = "Puntuación: " + puntuacion;
        }
        i++;
    }
    requestAnimationFrame(pelota);
    requestAnimationFrame(trampolin);
    requestAnimationFrame(crearCubo1);
    setTimeout(tick, 10);
}

function pelota() {
    ctx.fillStyle = "white"
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.beginPath();
    ctx.arc(POS_INICIAL.x, POS_INICIAL.y, BALL, 0, Math.PI * 2);
    ctx.fill();
}

function trampolin() {
    ctx.lineWidth = 8;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(POS_INICIAL_TRAMP.x, POS_INICIAL_TRAMP.y);
    ctx.lineTo(POS_INICIAL_TRAMP.x + TRAMPOLIN_LENGTH * 2, POS_INICIAL_TRAMP.y);
    ctx.stroke();
}


document.onkeydown = function (key) { moverTrampolin(key); }
document.onkeyup = function () { pararTrampolin(); }

let move = null;
function moverTrampolin(evt) {
    let right = false;
    let left = false;
    if (evt.keyCode == 68) {
        right = true
    } else if (evt.keyCode == 65) {
        left = true
    }
    if (right) {
        window.clearInterval(move);
        left = false;
        move = setInterval(function () {
            POS_INICIAL_TRAMP.x += 3;
        }, 1)
        return move;
    }
    if (left) {
        window.clearInterval(move);
        right = false;
        move = setInterval(function () {
            POS_INICIAL_TRAMP.x -= 3;
        }, 1)
        return move;
    }
}

function pararTrampolin() {
    window.clearInterval(move);
}

function crearCubos() {
    let x = 10;
    let cubo = {
        x: x,
        y: 10,
        width: 80,
        height: 40
    }
    cubos.push(cubo);
    for (let i = 0; i <= 7; i++) {
        cubos.push({
            x: x + 100 * i,
            y: 10,
            width: 80,
            height: 40
        });
    }
}

function crearCubo1() {
    ctx.lineWidth = 5;
    ctx.fillStyle = "#9161c9";
    for (let i = 0; i < cubos.length; i++) {
        ctx.rect(cubos[i].x, cubos[i].y, cubos[i].width, cubos[i].height);
    }
    ctx.fill();
}


tick();