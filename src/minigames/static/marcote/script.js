"use strict";
import { randomWord as _randomWord } from "words.js";
let randomWord = _randomWord;
const palabra = randomWord();

console.log('randomWord', palabra)

const state = {
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill("")),
    currentRow: 0,
    currentCol: 0
};

function update() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function draw(container, row, col, letter = "") {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;
    container.appendChild(box);
    return box;
}

function drawGame(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            draw(grid, i, j);
        }
    }
    container.appendChild(grid);
}

function isLetter() {

}

function updateGrid() {

}

function registerKey() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === "Enter") {
        }
        if (key === "Backspace") {

        }
        if (isLetter(key)) {

        }
        updateGrid();
    };
}

function main() {
    const game = document.getElementById("game");
    drawGame(game);
    // registerKey();
}

main();



document.querySelectorAll(".letter").forEach((element) => {
    element.addEventListener("click", async () => {
        element.innerHTML = "A";
    })
})

$("#word").text(palabra);
