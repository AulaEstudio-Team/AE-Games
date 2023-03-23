//variables globales

const scoreElement = document.querySelector(".puntos");

let velocity = 80;
let size = 20;
let score = 0;

class object {
    constructor() {
        this.size = size;
    }
    golpe(obj) {
        let difx = Math.abs(this.x - obj.x);
        let dify = Math.abs(this.y - obj.y);
        if (difx >= 0 && difx < size && dify >= 0 && dify < size) {
            return true;
            
        } else {
            return false;
        }
    }
}
//Crearemos la clase snake donde le pasaremos las puntos x e y y los metodos dibujar
//el metodo setxy que sera para el movimiento y el metodo meter que introduce la serpiente.
class snake extends object {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.next = null;
    }
    dibujar(ctx) {
        if (this.next != null) {
            this.next.dibujar(ctx);
        }
        ctx.fillStyle = "#33FF33";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    setxy(x, y) {
        if (this.next != null) {
            this.next.setxy(this.x, this.y);
        }
        this.x = x;
        this.y = y;
    }
    meter() {
        if (this.next == null) {
            this.next = new snake(this.x, this.y);
        } else {
            this.next.meter();
        }
    }
    verSiguiente() {
        return this.next;
    }
}
//Crearemos la clase comida y los metodos que generaran un ubicación random en el tablero
//el metodo que colocara la manzana y el metodo dibujar que pondra el color y el tamaño del tablero
class Comida extends object {
    constructor() {
        super();
        this.x = this.generate();
        this.y = this.generate();
    }
    generate() {
        let num = (Math.floor(Math.random() * 49)) * 10;
        return num;
    }
    colocar() {
        this.x = this.generate();
        this.y = this.generate();
        
    }
    dibujar(ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

let head = new snake(20, 20);
let comida = new Comida();
let ex = true;
let ey = true;
let xdir = 0;
let ydir = 0;

function move() {
    let nx = head.x + xdir;
    let ny = head.y + ydir;
    head.setxy(nx, ny);
}

//Funcion para el control de nuestra serpiente, le pasamos con un if el cod de las letras en este
//caso awsd y los demas parametros de dirección
function control(event) {
    let cod = event.keyCode;
    if (ex) {
        if (cod == 87) {
            ydir = -size;
            xdir = 0;
            ex = false;
            ey = true;
        }
        if (cod == 83) {
            ydir = size;
            xdir = 0;
            ex = false;
            ey = true;
        }
    }
    if (ey) {
        if (cod == 65) {
            ydir = 0;
            xdir = -size;
            ey = false;
            ex = true;
        }
        if (cod == 68) {
            ydir = 0;
            xdir = size;
            ey = false;
            ex = true;
        }
    }
}
//Esta funcion sera para declarar que el juego a acabado
function GameOver() {
    xdir = 0;
    ydir = 0;
    ex = true;
    ey = true;
    head = new snake(20, 20);
    comida = new Comida();
    alert("GAME OVER");
}
//Funcion para cuando nuestra snake choque contra una pared hacemos un if 
//que cuando nuestra cabeza x e i sea mayor o menos al borde de la pared el juego se acabara.
function choquepared() {
    if (head.x < 0 || head.x > 490 || head.y < 0 || head.y > 490) {
        GameOver();
    }
}
//
function choquecuerpo() {
    let temp = null;
    try {
        temp = head.verSiguiente().verSiguiente();
    } catch (err) {
        temp = null;
    }
    while (temp != null) {
        if (head.golpe(temp)) {
            
            GameOver();
        } else {
            temp = temp.verSiguiente();
        }
    }
}
//Funcion draw para dibujar el tablero la comida y la cabeza de la snake.
//
function draw() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    head.dibujar(ctx);
    comida.dibujar(ctx);
}
//Function main que lo que hara sera ejecutar todos las funciones declaradas anteriormente 
//y un if que indique que cuando nuestra serpiente golpee la comida se vuelva a colocar la comida y crecera nuestra serpiente

function main() {
    choquecuerpo();
    choquepared();
    draw();
    move();
    if (head.golpe(comida)) {
        comida.colocar();
        head.meter();
        
        
    }
}

setInterval("main()", velocity); 
        