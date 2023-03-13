"use strict";

let player = 'red';
let playIA = false;

let player1 = 0;
let ia = 0;

let x1 = 0;

let tablero = [];
for (let x = 0; x < 6; x++) {
    tablero.push([]);
    for (let y = 0; y < 7; y++) {
        tablero[x].push({ "casilla": "" });
    }
}

/**
 * Funcion que coloca la ficha.
 * @param {Number} x x
 * @param {Number} y y
 * @param {String} color color
 */
function pulsar(x, y, color) {
    if (x1 > 0 && x == 0) {
        return;
    }
    let tabla = document.getElementById('tabla');

    if (x <= 5) {
        if (x == 0) {
            if (color == player) {
                tablero[x][y].casilla = player;
                x1 = x;
            } else {
                tablero[x][y].casilla = color;
                x1 = x;
            }
        } else {
            if (color == player) {
                if (tablero[x][y].casilla == "") {
                    tablero[x - 1][y].casilla = "";
                    tablero[x][y].casilla = player;
                    x1 = x;
                }
            } else {
                if (tablero[x][y].casilla == "") {
                    tablero[x - 1][y].casilla = "";
                    tablero[x][y].casilla = color;
                    x1 = x;
                }
            }
        }
        tabla.remove();
        timer(x + 1, y, color);
        game();
    } else {
        if(color == 'red'){
            playIA = true;
        }else{
            playIA = false;
        }
        if (!comprobarGanador(x1, y, color)) {
            tabla.remove();
            x1 = 0;
            if (playIA) {
                game();
                IA();
            } else {
                game();
            }
        }
    }
}

/**
 * Funcion que coloca la ficha
 * la IA.
 */
function IA() {
    let random = Math.floor(Math.random() * 5);
    if (tablero[0][random].casilla != '') {
        IA();
        return;
    }
    pulsar(0, random, 'yellow');
}

/**
 * Funcion para comprobar si has ganado.
 * @param {Number} x x
 * @param {Number} y y
 * @param {String} color color
 */
function comprobarGanador(x, y, color) {
    let ganador = 0;

    ganador++;
    let linea = false;
    let izquierda = false;
    let derecha = false;

    for (let i = 1; i <= 3; i++) {
        //Comprueba de arriba hacia abajo.
        if (x + i <= 5) {
            if (tablero[x + i][y].casilla == color) {
                ganador++;
            }
        }
    }

    if (ganador == 4) {
        linea = true;
        ganador = 0;
        ganar(color);
        return true;
    } else {
        ganador = 1;
    }

    if (!linea) {

        for (let i = 1; i <= 3; i++) {
            //Comprueba de izquierda a derecha.
            if (y + i <= 6 && !derecha) {
                if (tablero[x][y + i].casilla == color) {
                    ganador++;
                } else {
                    derecha = true;
                }
            }
            //Comprueba de derecha a iquierda.
            if (y - i >= 0 && !izquierda) {
                if (tablero[x][y - i].casilla == color) {
                    ganador++;
                } else {
                    izquierda = true;
                }
            }
        }

        if (ganador == 4) {
            ganador = 0;
            izquierda = true;
            derecha = true;
            ganar(color);
            return true;
        } else {
            ganador = 1;
            izquierda = false;
            derecha = false;
        }
    }

    if (!linea || (!izquierda && !derecha)) {
        let derechaArriba = false;
        let izquierdaArriba = false;
        let derechaAbajo = false;
        let izquierdaAbajo = false;
        for (let i = 1; i <= 3; i++) {
            // Comprueba diagonal izquierda a derecha hacia arriba.
            if (y + i <= 6 && x - i >= 0 && !derechaArriba) {
                if (tablero[x - i][y + i].casilla == color) {
                    ganador++;
                } else {
                    derechaArriba = true;
                }
            }
            // Comprueba diagonal derecha a izquierda hacia arriba.
            if (y - i >= 0 && x - i >= 0 && !izquierdaArriba) {
                if (tablero[x - i][y - i].casilla == color) {
                    ganador++;
                } else {
                    izquierdaArriba = true;
                }
            }
            // Comprueba diagonal izquierda a derecha hacia abajo.
            if (y + i <= 6 && x + i <= 5 && !derechaAbajo) {
                if (tablero[x + i][y + i].casilla == color) {
                    ganador++;
                } else {
                    derechaAbajo = true;
                }
            }
            // Comprueba diagonal derecha a izquierda hacia abajo.
            if (y - i >= 0 && x + i <= 5 && !izquierdaAbajo) {
                if (tablero[x + i][y - i].casilla == color) {
                    ganador++;
                } else {
                    izquierdaAbajo = true;
                }
            }
        }

        if (ganador == 4) {
            ganador = 0;
            ganar(color);
            return true;
        } else {
            ganador = 0;
        }
    }
    return false;
}

/**
 * Funcion del ganador.
 * @param {String} ganador
 */
function ganar(ganador) {
    let divGanador = document.getElementById('ganador');
    let h1 = document.createElement('h1');
    h1.setAttribute('class', 'text-white text-center m-5');
    if(ganador == 'red'){
        player1++;
        h1.innerHTML = `¡Has ganado!! 😁`;
    }else{
        ia++;
        h1.innerHTML = `¡Has perdido!! 😥`;
    }
    let marcador = document.getElementById('marcador');
    marcador.innerHTML = `<h1 class="text-center"><b id="p1">${player1}</b>
    vs <b id="ia">${ia}</b></h1>`;

    let div = document.createElement("div");
    div.setAttribute("class", "d-grid col-3 mx-auto");
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-outline-danger text-center m-5");
    button.setAttribute("onclick", "juga()");
    button.innerHTML = 'Volver a jugar';
    div.appendChild(button);
    divGanador.appendChild(h1);
    divGanador.appendChild(div);
}

/**
 * Funcion para mover la ficha hacia abajo.
 * @param {Number} x x
 * @param {Number} y y
 * @param {String} color el color
 */
function timer(x, y, color) {
    setTimeout(() => {
        pulsar(x, y, color);
    }, 250);
}

/**
 * Funcion de volver a jugar.
 */
function juga() {
    let tabla = document.getElementById('tabla');
    tabla.remove();

    let divganador = document.getElementById('ganador');
    divganador.innerHTML = '';

    player = 'red';
    playIA = false;

    x1 = 0;

    tablero = [];
    for (let x = 0; x < 6; x++) {
        tablero.push([]);
        for (let y = 0; y < 7; y++) {
            tablero[x].push({ "casilla": "" });
        }
    }
    game();
}

/**
 * Funcion para crear el tablero.
 */
function crearTablero() {
    let div = document.getElementById('tablero');
    let table = document.createElement('table');
    table.id = 'tabla';
    for (let x = 0; x < 6; x++) {
        let tr = document.createElement('tr');
        for (let y = 0; y < 7; y++) {
            let td = document.createElement('td');
            let button = document.createElement('button');
            switch (tablero[x][y].casilla) {
                case 'red':
                    button.setAttribute("class", "red");
                    button.setAttribute("id", "boton");
                    break;

                case 'yellow':
                    button.setAttribute("class", "yellow");
                    button.setAttribute("id", "boton");
                    break;

                default:
                    button.setAttribute("onclick", `pulsar(${0},${y},"red")`);
                    button.setAttribute("id", "boton");
                    break;
            }
            td.appendChild(button);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
}

/**
 * Funcion del juego.
 */
function game() {
    crearTablero();
}

game();