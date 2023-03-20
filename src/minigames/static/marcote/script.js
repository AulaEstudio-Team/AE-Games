"use strict";
import { randomWord as _randomWord } from "./words.js";
let randomWord = _randomWord;
const random = randomWord();
let win = false;

function draw(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            drawCelda(grid, i, j);
        }
    }
    container.appendChild(grid);
}

function update() {
    for (let i = 0; i < info.grid.length; i++) {
        for (let j = 0; j < info.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = info.grid[i][j];
        }
    }
}

function drawCelda(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;
    container.appendChild(box);
    return box;
}

const info = {
    random: random,
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    row: 0,
    col: 0,
};

function palabraActual() {
    return info.grid[info.row].reduce((prev, curr) => prev + curr);
}

function revelar(guess) {
    const row = info.row;
    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;
        if (letter === info.random[i]) {
            box.classList.add('right');
        } else if (info.random.includes(letter)) {
            box.classList.add('wrong');
        } else {
            box.classList.add('empty');
        }
    }
    const ganador = info.random == guess;
    const final = info.row == 5;
    if (ganador) {
        document.getElementById('resultado-wordle').innerHTML = 'Has ganado 👍';
        win = true;
    } else if (final) {
        document.getElementById('resultado-wordle').innerHTML = `Has perdido, la random era: ${info.random}`;
    }
}

function add(letter) {
    if (info.col === 5) {
        return
    };
    info.grid[info.row][info.col] = letter;
    info.col++;
}

function borrar() {
    if (info.col === 0) {
        return
    };
    info.grid[info.row][info.col - 1] = '';
    info.col--;
}

function teclas() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            if (info.col === 5) {
                const word = palabraActual();
                revelar(word);
                info.row++;
                info.col = 0;
            }
        }
        if (key === 'Backspace') {
            borrar();
        }
        if (key.length === 1 && key.match(/[a-z]/i) && !win) {
            add(key);
        }
        update();
    };
}

function start() {
    const game = document.getElementById('game');
    draw(game);
    teclas();
}

start();