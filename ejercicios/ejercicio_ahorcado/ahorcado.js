const palabraSecreta = "calle";
    
let palabraAdivinada = Array(palabraSecreta.length).fill("_");
let letrasIncorrectas = [];
let intentosRestantes = 5;


function comprobarLetra (letra){
    if(palabraSecreta.includes(letra)){
        for(let i=0; i<palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraAdivinada[i] = letra;
            }
        }
    }else {
        letrasIncorrectas.push(letra);
        intentosRestantes--;
        alert("Te quedan " + intentosRestantes + " restantes");
    }
}

function reiniciar {

}

function 

