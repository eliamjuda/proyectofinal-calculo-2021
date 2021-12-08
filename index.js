document.addEventListener("DOMContentLoaded", (e) => {
    let d = document, res = d.getElementById('res'), input = d.getElementById('input'), n = 0, base = 0, resultado = 0;
    const rectangulos = [];
    
    input.addEventListener("change", (e) => {
        n = e.target.value; 
        for(let i = 1; i <= n; i++){
            base = (base + 0.2);
            rectangulos.push(base);
        }
        rectMedia = rectangulos.map( function(e) { return e - 0.1});
        for(let j = 0; j <= rectMedia.length - 1; j++){
            resultado = resultado +  0.2*Math.exp(rectMedia[j]);
        }
        res.innerText = resultado.toFixed(4);
    });
    input.addEventListener("blur", (e) => {
        resultado = 0;
        base = 0;
        rectMedia.splice(0, rectMedia.length); rectangulos.splice(0, rectangulos.length);
    });
});

// ------------------------------------     En este archivo ocurre la magia profe 🐱‍👤 --------------------------------------------

// Breve explicación del código (En caso de ser necesario):

// - Primero se traen los elementos del DOM necesarios y se les asigna en una variable
//   Estos elementos necesarios son: El texto <p> donde va el resultado y el input de donde se obtiene su valor "n".

// - Se crea un evento "change", que es lo que cambia el resultado dependiendo de qué valor se ingrese en el input.

// - Se obtiene el valor de "n", se hace un ciclo for que es lo que añadirá cuántos rectángulos serán necesarios,
//   dependiendo de qué valor es "n".

// - Creo un arreglo y lo mapeo, le asigno los valores del arreglo rectángulos, pero a cada valor de rectángulos le resto 0.1
//   De esta forma, tenemos el arreglo con los valores de los puntos medios de los rectángulos.

// - Nuevamente un for, pero ahora para que todos los valores del arreglo que contiene los puntos medios haga la ecuación 
//   necesaria por cada elemento
//   y los sume, de esta forma se obtiene el resultado.

// - Le inyectamos el resultado al párrafo HTML.

// - Por último, creamos otro evento "blur" para que cada vez que se cambie el valor, todos las variables y arreglos 
//   se reinicien.
