"use strict"

document.getElementById("imagen2").src='AE-Games\src\minigames\static\ahorcado\img\ahorcado_6.png';

const LISTA=["gato", "hotel", "subasta", "onomatopeya", "esternocleidomastoideo","desoxirribonucleico", "casa", "jeringuilla", "ladron", "bistec", "ranura", "equipo", "menhir"]


function recoge_letra(){
    let letra_elegida=document.getElementById("letra").value;
    return letra_elegida;
}

const RANDOM = Math.floor(Math.random()*LISTA.length);
    


function seleccion_palabra(){
    let palabra=LISTA[RANDOM];
    return palabra;
}


function array_vacio(){
    let palabra=seleccion_palabra();
    let array=[]
    for(let i=0;i<palabra.length;i++){
        array.push("_ ");
    }
    return array;
}
    
let fallos=0;
let aciertos=0;
let comprobar=[]
let array=array_vacio();
let control_null=false;
let falladas=[];

function usuario(){
    let control_comprobar=true;
    let letra=recoge_letra()
    let palabra_random=seleccion_palabra();
    let encontrada=false;
    for(let c of comprobar){
        if(c==letra){
            control_comprobar=false;
        }
    }
    if(control_comprobar==true){
        for(let i=0;i<palabra_random.length;i++){
            if(letra==palabra_random[i]){
                array.splice(i,1, palabra_random[i]);
                encontrada=true;
                comprobar.push(letra);
            }  
        }
        if(encontrada==false){
            fallos++
            falladas.push(recoge_letra())
        }else{
            aciertos++
        }
        bien.innerHTML=aciertos;
        mal.innerHTML=fallos;
    }else{
        alert ("ya has introducido esa letra");
    }
    mostrar_texto.innerHTML=array;
    mostrar_falladas.innerHTML=falladas;
    verificar(palabra_random, array, fallos)
}

function verificar(palabra_random, array, fallos){
    let verificar=true;
    for(let i=0;i<palabra_random.length;i++){
        if(palabra_random[i]!=array[i]){
            verificar=false;
        }
    }
    if(fallos==1){
        document.getElementById("imagen2").src='AE-Games\src\minigames\static\ahorcado\img\ahorcado_5.png';
    }
    if(fallos==2){
        document.getElementById("imagen2").src='AE-Games\src\minigames\static\ahorcado\img\ahorcado_4.png';
    }
    if(fallos==3){
        document.getElementById("imagen2").src='AE-Games\src\minigames\static\ahorcado\img\ahorcado_3.png';
    }
    if(fallos==4){
        document.getElementById("imagen2").src='AE-Games\src\minigames\static\ahorcado\img\ahorcado_2.png';
    }
    if(fallos==5){
        document.getElementById("imagen2").src='AE-Games\src\minigames\static\ahorcado\img\ahorcado_1.png';
    }
    if(fallos==6){
        document.getElementById("imagen2").src='AE-Games\src\minigames\static\ahorcado\img\ahorcado_1.png';
        alert("Has perdido, pulsa F5 para jugar de nuevo");
        
    }
    if(verificar==true){
        alert ("has ganado, pulsa F5 para jugar de nuevo");
    }
}

onload(mostrar_texto.innerHTML=array)