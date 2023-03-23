
//Variable de puntuación

let puntos=0;

//Funcion principal que asigna los puntos adquiridos según el agujero en el que se ha hecho click y a
//continuación borra la clase en la cual el atributo height se ve modificado y el topo desaparece

$(function(){
    $(".contenido").hover(function(){
        let control=$(this);
        control.find(".agujero").click(function(){
            if(control.hasClass("active-e")){
                control.removeClass("active-e");
                puntos = puntos-5
                $("#puntuacion").html(puntos);
            }
            if(control.hasClass("active-d")){
                control.removeClass("active-d");
                puntos = puntos+3
                $("#puntuacion").html(puntos);
            }
            if(control.hasClass("active")){
                control.removeClass("active");
                puntos++
                $("#puntuacion").html(puntos);
            }
        })
    })
})


//Funciones que asignan por posicion (numero random) la clase correspondiente
//que modifica la altura del topo para que sea visible y a continuación vuelve
//a ser modificado para que el topo desaparezca


//funcion para topo normal

function topoRandom(){
    let numero= parseInt(Math.random()*12)
    $(".contenido").removeClass("active")
    $(".contenido:nth-child("+numero+")").addClass("active")
}


//funcion para topo dorado

function doradoRandom(){
    let numero = parseInt(Math.random()*12)
    $(".contenido").removeClass("active-d");
    $(".contenido:nth-child("+numero+")").addClass("active-d");
}

//Funcion para topo enfadado

function enfadadoRandom(){
    let numero = parseInt(Math.random()*12)
    $(".contenido").removeClass("active-e");
    $(".contenido:nth-child("+numero+")").addClass("active-e");
}

//Intervalos que llaman la funcion correspondiente cada x numero de segundos

let intervalo= setInterval(function(){
    topoRandom();
}, 1200)


let intervalo2= setInterval(function(){
    doradoRandom();
}, 900)



let intervalo3= setInterval(function(){
    enfadadoRandom();
}, 2000)

function reiniciar(){
    location.reload();
}

window.onload = cuentaAtras;
var tiempo_total = 30;
function cuentaAtras() {
    document.getElementById('temporizador').innerHTML = tiempo_total;
    if(tiempo_total==0 && puntos<40){
        document.getElementById("texto").innerHTML="¡¡¡GAME OVER!!!"
        let reload=setInterval(function(){
            location.reload();
        }, 3000)
    }else{
        tiempo_total-=1;
        setTimeout("cuentaAtras()",1000);
    }
    if(puntos>=40){
        document.getElementById("texto").innerHTML="¡¡¡VICTORY!!!"
        
    }
}



            

