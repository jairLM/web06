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


/* 

-----funciones flecha(arrow functions)-----
Funciones similares a las funciones expresadas pero:
-No requiere la palabra reservada function
-Si tiene una sala instrucion no requiere las llaves -> {}
-Si la instruccion es el mismo retorno , no requiere la palabra return 
-No tienen hoisting por eso son similares a las expresadas

sintaxis:
    const nombreVariable = (parámetros)=>instruccion;
    o
    const nombreVariable = (parámetros)=>{
        instrucciones
        return expresión;
    }
    

*/
const areaRectangulo = (base, altura)=>`El area es: ${base*altura} m2`

console.log(areaRectangulo(5, 8));

/* 

-----Parámetros por defecto(default parameters)-----
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/
/**
 * 
 * @param {number} base 
 * @param {number} altura 
 * @returns 
 */

const areaTriangulo = (base=1, altura=1)=>`El area del triángulo es ${(base*altura)/2} cm2`

console.log(areaTriangulo(5,8));
console.log(areaTriangulo());//NaN
console.log((1000).toString());//conversión base 10 -> 1000
console.log((1000).toString(2));//conversión base 2 -> 1111101000
console.log((1000).toString(16));//conversión base 16 -> 3e8

/*

---------Parámetros rest(rest parameters)-----------
Permite representar una serie de valores indefinidos en los argumentos.
Esta serie de valores se presentar como un array.
Rest parameters debe ir al final de la lista de parámetros

sintaxis:
    ...nombreParametros

*/

const sumatoriaMultiplesNumeros = (a=0, b=0, ...rest) =>{
    let suma = a + b;
    for (let i = 0; i < rest.length; i++){
        suma = suma + rest[i];
      }
      return suma;
   
 } 

console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2,5,10,9,50)}`); //76
console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2)}`); //NaN,2

/*

-----------Funciones de callback------------

*/ 