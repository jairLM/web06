console.log('Sesión JS-01');

/*
----------Funciones declaradas(function declaration, function statement)-----------

Una caracteristica de las funciones delcaradas es que tienen un hoisting.
Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.

sintaxis:
    function nombreDeLaFuncio(parametros){
        cuerpo de la funcion
    } nombreDeLaFuncio(argumentos); //invocacion

hoisting: comportamiento en JS que permite a la declaración de variables o funciones, se eleven al comienzo de un ámbito antes de que se ejecute el código


*/

console.log(multiplica(4,3));

function multiplica(a,b){
    return a*b;
}

/* 

-----funciones expresadas(function expressions)-----
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas(no tienen nombre).
Las funciones expresadas no tienen hoisting, porque no se carga en memoria hasta que se utilice.
Pueden ser redefinidas

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        Instrucciones;
    }


*/

const sum = function sumatoria(a, b){
    return a + b;  
}
console.log(`El resultado de la sumatoria es: ${sum(4,2)}`);

let saludo; //undefined
const localidad = "Tlaxcala";

if(localidad == 'Buenos Aires'){
    saludo = function (name){return `Que pedro ${name}`}
}else {
    saludo = function(name){return `Buenos dias ${name}`}
}

console.log(saludo('Jair'));
console.log(saludo('David'));

/* 

-----funciones autoinvocacas(selft-invoking functions)-----
Funciones que se autoinvocan, se pueden definir con funciones anónmimas.

sintaxis:
    
(function (parámetros){})(argumentos);
*/

(function (name){
    console.log(`Me llamo ${name} y me autoinvoco`);
})('ChatGpt')