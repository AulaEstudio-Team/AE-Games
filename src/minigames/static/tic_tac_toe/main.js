"use strict";
let lista = [];
let tabla = document.createElement("table")
let div = document.getElementById("juego")
let juega=false;
//Crear Tablero

for (let i = 0; i < 3; i++) {
    lista.push([])
    for (let j = 0; j < 3; j++) {
        lista[i].push({
            x: j,
            y: i
        })
    }
}

//Muestra Tablero
function crea_tablero() {

    for (let i = 0; i < lista.length; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < lista[i].length; j++) {
            let td = document.createElement("td")
            let boton = document.createElement("button")
            boton.setAttribute("id", `${i}${j}`);
            boton.setAttribute("class", "casilla");
            td.id = `${i}${j}`;

            let splitted = boton.id.split("")
            let posicion = { y: splitted[0], x: splitted[1] };
            boton.setAttribute("onclick", `juego(${posicion.x}, ${posicion.y})`)
            boton.setAttribute("id", "boton");
            td.appendChild(boton)
            tr.appendChild(td)
        }
        tabla.appendChild(tr)
        div.appendChild(tabla)
        tabla.setAttribute("id", "tablero")
    }
}
crea_tablero()


// Juego

function juego(x, y) {

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista[i].length; j++) {
            comprueba_empate()

            if (x == i && y == j && juega==false) {

                console.log(x, y);
                let td = document.getElementById(`${y}${x}`)
                td.innerHTML = "<h1 id='letra'>X</h1>"
                lista[y][x] = "X"
                juega=true;
                console.log(lista)
                comprueba_victoria()
                setTimeout(movimiento_rival, 500)
                
            }
        }
    }

}

function movimiento_rival(row, col) {

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista[i].length; j++) {
            let random = Math.floor(Math.random() * lista.length)
            let random2 = Math.floor(Math.random() * lista.length)
            if (lista[random][random2] != "O" && lista[random][random2] != "X") {
                lista[random][random2] = "O"

                let posicion = document.getElementById(`${random}${random2}`)
                posicion.innerHTML = "<h1 id='letra'>O</h1>"
                juega=false;
                comprueba_victoria_rival()
                return;
            }

            else if (lista[i][j] != "O" && lista[i][j] != "X") {
                lista[i][j] = "O"
                let crear = document.getElementById(`${i}${j}`)
                crear.innerHTML = "<h1 id='letra'>O</h1>"
                juega=false;
                comprueba_victoria_rival()
                return;
            }
        }
    }

}
//Comprueba Posible empate

function comprueba_empate() {
    let contador = 0;
    let suma = 9;
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista[i].length; j++) {
            if (lista[i][j] == "X" || lista[i][j] == "O") {
                contador++
            }
        }
    }
    if (contador == suma) {
        let div = document.getElementById("victoria_invisible");
        div.setAttribute("id", "letra_victoria");
        div.innerHTML = "Empate <br> !!!"
    }
}

// Funcion que comprueba las posibilidades de victoria de la X
function comprueba_victoria() {
    if (lista[0][0] == "X" && lista[1][0] == "X" && lista[2][0] == "X") {
        animacion_victoria_x()
        return;
    } else if (lista[0][1] == "X" && lista[1][1] == "X" && lista[2][1] == "X") {

        animacion_victoria_x()
        return;
    } else if (lista[0][2] == "X" && lista[1][2] == "X" && lista[2][2] == "X") {
        animacion_victoria_x()

        return;
    } else if (lista[0][0] == "X" && lista[0][1] == "X" && lista[0][2] == "X") {
        animacion_victoria_x()

        return;
    }
    else if (lista[1][0] == "X" && lista[1][1] == "X" && lista[1][2] == "X") {
        animacion_victoria_x()

        return;
    }
    else if (lista[0][0] == "X" && lista[0][1] == "X" && lista[0][2] == "X") {
        animacion_victoria_x()

        return;
    }
    else if (lista[2][0] == "X" && lista[2][1] == "X" && lista[2][2] == "X") {
        animacion_victoria_x()

        return;
    }
    else if (lista[0][0] == "X" && lista[1][1] == "X" && lista[2][2] == "X") {
        animacion_victoria_x()

        return;
    }
    else if (lista[0][2] == "X" && lista[1][1] == "X" && lista[2][0] == "X") {
        animacion_victoria_x()

        return;
    }
    //

}

//Funcion que comprueba las posibles victorias de la O
function comprueba_victoria_rival() {
    if (lista[0][0] == "O" && lista[1][0] == "O" && lista[2][0] == "O") {
        animacion_victoria_o()
        return;
    }
    else if (lista[0][1] == "O" && lista[1][1] == "O" && lista[2][1] == "O") {
        animacion_victoria_o()

        return;
    } else if (lista[0][2] == "O" && lista[1][2] == "O" && lista[2][2] == "O") {
        animacion_victoria_o()

        return;
    }
    else if (lista[1][0] == "X" && lista[1][1] == "X" && lista[1][2] == "X") {
        animacion_victoria_o()

        return;
    }
    else if (lista[0][0] == "X" && lista[0][1] == "X" && lista[0][2] == "X") {
        animacion_victoria_o()

        return;
    }
    else if (lista[0][0] == "O" && lista[0][1] == "O" && lista[0][2] == "O") {
        animacion_victoria_o()

        return;
    }
    else if (lista[0][0] == "O" && lista[1][1] == "O" && lista[2][2] == "O") {
        animacion_victoria_o()

        return;
    }
    else if (lista[0][2] == "O" && lista[1][1] == "O" && lista[2][0] == "O") {
        animacion_victoria_o()
        location.reload();
        return;
    }
}

function animacion_victoria_x() {

    let div = document.getElementById("victoria_invisible");
    div.setAttribute("id", "letra_victoria");
    div.innerHTML = "Ganan las <br> X"

}
function animacion_victoria_o() {
    let div = document.getElementById("victoria_invisible");
    div.setAttribute("id", "letra_victoria");
    div.innerHTML = "Ganan las <br> O"
}

function reset_game() {
    location.reload();
}
