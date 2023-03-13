const LISTA=["gato", "hotel", "subasta", "onomatopeya", "esternocleidomastoideo","desoxirribonucléico", "casa", "jeringuilla", "ladrón", "bistec", "ranura", "equipo", "menhir"]

function recoge_letra(){
    let letra_elegida=document.getElementById("letra").value
    return letra_elegida;
}


function numero_random(){
    let random = Math.floor(Math.random()*LISTA.length);
    return random;
}

function seleccion_palabra(){
    let numero=numero_random();
    let palabra=LISTA[numero];
    return palabra;
}




function array_vacio(){
    let palabra=seleccion_palabra();
  
    let array=[]
    for(let i=0;i<palabra.length;i++){
        array.push(null);
    }
    return array;
}


let array_falladas=[];
let aciertos=0;
let fallos=0;
let palabra=array_vacio();


function mostrar_array(){
    document.getElementById("palabra").innerHTML=palabra
}

function usuario(){
    console.log("hola")
    let letra=recoge_letra()
    let encontrada=false;
    for(let i=0;i<palabra_random.length;i++){
        if(letra==palabra_random[i]){
            palabra[i]=letra;
            
            encontrada=true;
        }
    }
    if(!encontrada){
        fallos++;
        array_falladas.push(letra)
    }else{
        aciertos++;
    }
    
    recoge_fallos(fallos, palabra);
    document.getElementById("fallos").innerHTML = fallos;
    document.getElementById("aciertos").innerHTML = aciertos;
    document.getElementById("falladas").innerHTML = array_falladas;
}

function recoge_fallos(fallos, palabra){
    let control=false;
    if(fallos==5){
        alert("Has perdido, has tenido 5 fallos");
    }else{
        for(let i=0;i<palabra.length;i++){
            if(palabra[i]==null){
                control=true;
            }
        }
        if(control===false){
            alert("Has ganado");
        }
    }
}

    
    

        



    
 