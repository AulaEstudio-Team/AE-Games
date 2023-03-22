"use strict";
let numero=1
console.log(numero)
let lista = [];
let suma = 0;
let mana = [];
let turno = 0;
let jugador1 = [];
let jugador2 = [];
let lista_enemigos = []



let oro = 10;

// Crear tablero bidimensional
for (let i = 0; i < 10; i++) {
    lista.push([])
    for (let j = 0; j < 10; j++) {
        lista[i].push({
            x: j,
            y: i
        })
    }
}
console.log(lista);
let div = document.getElementById("juego_geometry");
let tabla = document.createElement("table");
tabla.id = "geometry";
function genera_tablero() {

    for (let i = 0; i < lista.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < lista[i].length; j++) {
            let td = document.createElement("td");
            td.className = `${i}${j}`;
            if (i % 2 == 0) {
                if (suma == 0) {
                    td.setAttribute("id", "color1");
                    suma = 1;
                } else if (suma == 1) {
                    td.setAttribute("id", "color2");
                    suma = 0;
                }
            } else if (i % 2 != 0) {
                if (suma == 0) {
                    td.setAttribute("id", "color2");
                    suma = 1;
                } else if (suma == 1) {
                    td.setAttribute("id", "color1");
                    suma = 0;
                }
            }
            if (lista[i][j]["nombre"] == "Mussolini") {
                let img = document.createElement("button");
                img.textContent = "M.L";
                img.setAttribute("data-title", `Mussolini: HP: ${lista[i][j]['HP']} Nivel: ${lista[i][j]['nivel']}`);
                td.removeAttribute("id", "color1");
                td.removeAttribute("id", "color2");

                td.setAttribute("id", "mussolini")
                td.appendChild(img)
                lista_enemigos.push(obj[0])
            }

            if (lista[i][j]["nombre"] == "Infanteria liberadora") {
                let img = document.createElement("button");
                td.removeAttribute("id", "color1");
                td.removeAttribute("id", "color2");

                td.setAttribute("id", "caballeria")
                td.appendChild(img)


            }
            if (lista[i][j]["nombre"] == "Bomba Atomica") {
                let img = document.createElement("button");
                td.removeAttribute("id", "color1");
                td.removeAttribute("id", "color2");

                td.setAttribute("id", "infanteria")
                td.appendChild(img)

            }
            if (lista[i][j]["nombre"] == "P51 Mustang") {
                let img = document.createElement("button");
                td.removeAttribute("id", "color1");
                td.removeAttribute("id", "color2");

                td.setAttribute("id", "bombarderos")
                td.appendChild(img)

            }
            if (lista[i][j]["nombre"] == "Lodestar") {
                let img = document.createElement("button");
                img.onclick = function () {
                    alert("Has seleccionado una tropa aliada!")
                    juego(aliados[3])
                }
                img.textContent = "LD";
                img.setAttribute("data-title", "Lodestar:");
                img.setAttribute("id", "bomba")
                td.removeAttribute("id", "color1");
                td.removeAttribute("id", "color2");

                td.setAttribute("id", "gran_bomba")
                td.appendChild(img)

            }

            tr.appendChild(td);


        }
        tabla.appendChild(tr);

    }
    div.appendChild(tabla);
    console.log(tabla);
    let lider = document.getElementById("carta1")
    let lider2 = document.getElementById("carta2")
    let lider3 = document.getElementById("carta3")
    let lider4 = document.getElementById("carta4")
    let lider1_boton = document.getElementById("lider1_boton")
    lider.setAttribute("id", "lider_oculto")
    lider2.setAttribute("id", "lider_oculto")
    lider3.setAttribute("id", "lider_oculto")
    lider4.setAttribute("id", "lider_oculto")
    lider1_boton.setAttribute("id", "lider_oculto")
}


function juego(aliado, enemigo) {
    if (aliado["nombre"] =="Lodestar") {
        let lider = document.getElementById("lider_oculto")
        let lider2 = document.getElementById("carta2")
        let lider3 = document.getElementById("carta3")
        let lider4 = document.getElementById("carta4")
        let lider1_boton = document.getElementById("lider1_boton")
        // lider1_boton.setAttribute("id","LD_boton")
        lider.setAttribute("id", "L_ataque1")
        lider2.setAttribute("id", "L_ataque2")
        
        
        
        
    }
}

//Añadir piezas al tablero

//Piezas enemigas
let obj = [

    {
        nombre: "Mussolini",
        HP: 100,
        Hechizos: ["Tropas italianas", "Comandos de guerra"],
        nivel: 100,

    },
    {
        nombre: "Infanteria Nazi",
        HP: 150,
        Hechizos: ["Cazas de guerra fascitas", "Campos de concentracion"],
        nivel: 95
    },
    {
        nombre: "Adolfo Hitler",
        HP: 80,
        Hechizos: ["Cristal Wall", "Mirror Magic"],
        nivel: 55
    }

]
function random() {
    let aleatorio = Math.floor(Math.random() * obj.length)
    return obj[aleatorio];
}



//Piezas enemigas
function piezas_enemigas() {
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista[i].length; j++) {
            if (i == 0) {
                lista[i][j] = random();

                for (let atributo in lista[i][j]) {
                    // console.log(lista[i][j][atributo]);
                }
            }

        }
    }
}

let lideres_mundiales = [
    {
        nombre: "Theodoro Roosevelt",
        pp: 300,
        unidades: ["Caballeria liberadora", "Infanteria liberadora", "Bombarderos liberadores", "La gran bomba liberadora"]

    }, {
        nombre: "Mahatma Ghandhi",
        pp: 0,
        unidades: ["Hippies fumaporros", "Floripower Army", "El amor es un idioma universal", "Se acabo el ser buena onda"]
    },
]
let aliados = [{
    nombre: "P51 Mustang",
    HP: 50,
    ataque: ["Bombardeo", "Metralla"]

}, {
    nombre: "Infanteria liberadora",
    HP: 100,
    ataque: ["Reparacion", "Por la libertad"]
}, {
    nombre: "Bomba Atomica",
    HP: 1,
    ataque: ["Destruccion atomica"]
}, {
    nombre: "Lodestar",
    HP: 75,
    ataque: ["Bombardeo Preciso", "Metralla Precisa"]
}
]

function lider_aliado() {
    let lider = document.getElementById("carta1")
    alert("Theodore Roosevelt, sobre tus anchos hombros reposa la tarea de cargar hacia delante y dirigir a tu pueblo en su gran aventura, usa tu poder militar para dar a tu gente el trato justo que desesperadamente merecen. Sin duda alguna haras de los estados unidos de america el centro de atencion en todo el mundo, bravo, señor presidente. ");
    lider = lideres_mundiales[0]

    actualiza_jueguito(lider)

}
function actualiza_jueguito(lider_elegido) {

    let tropas = [];
    for (let unidad of aliados) {
        tropas.push(unidad)

    }

    let tabla = document.getElementById("geometry");
    piezas_enemigas();
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length; j++) {
            if (i = 9) {
                let tropa_random = tropas[Math.floor(Math.random() * tropas.length)];
                lista[i][j] = tropa_random
            }

        }
    }
    genera_tablero();
}
function jueguito() {
    alert("escoge un lider aliado");


}
jueguito();


