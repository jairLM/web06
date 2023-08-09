console.log('Sesion js-03');

//-------Declaracion de bloque de código-------
/*
    {
        Código
    }
    Las variables con let y const solo tendran alcance dentro del bloque o bloques anidados
    Si la variable en el bloque tiene el mismo nombre que una variable fuera del bloque, se le da prioridad a la que esta dentro del bloque
*/
let firstName = 'Jair';
const lastName = 'Lopez';
var age = '24';
  
{
    let firstName = 'Mau';
    const lastName = 'Peniche';
    var age = '26';
    const colorFav = 'Azul';
    var comidaFav = 'Pozole';  
    console.log(`${firstName} ${lastName}`); //Mau Peniche
    console.log(age);//26
    console.log(colorFav);//Azul
    console.log(comidaFav);//pozole
}

console.log(`${firstName} ${lastName}`);//Jair Lopez
console.log(age);//26
//console.log(colorFav);//Azul
console.log(comidaFav);//pozole

//-------Condicional if-else-------
/*  sintaxis
        if(condicion){
            sentencia
           }else{
            otra sentencia            
           }
    
*/  

const temperatura = 30;
let mensaje = 'Temperatura ideal'

if(temperatura === 22){
    mensaje += ` ${temperatura} grados centigrados`;
    
}
else if(temperatura >= 15 && temperatura <= 21){
    mensaje = `La temperatura de ${temperatura} grados centigrados, es fría`
}
else if(temperatura >= 23 && temperatura <= 30){
    mensaje = `La temperatura de ${temperatura} grados centigrados, es caliente`
}

else{
    mensaje = `La temperatura de ${temperatura} grados centigrados no es ideal`
}

console.log(mensaje);

//-----Condicional switch-----
/*
La condicional switch evalua una expresión y se compara con el valor de cada instancia en 'case' y se ejecuta ñas sentencias 'breack' o se finalice todas las sentencias de la condicion switch

sintaxis
    switch(expresion){
        case valor1:
            sentencia;
            breack;
        case valor2:
            sentencia;
            breack;
        case valorn:
            sentencia;
            breack;
        default:
            sentencia;
            breack;
    }

*/

/**
 * 
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad del ventilador 
 */

const setVelocidadVentilador =(velocidad = 0) =>{
    let mensaje;
    switch(parseInt(velocidad)){
        case 0:
            mensaje = 'Apagado';
            break;
        case 1:
            mensaje = 'Velocidad baja';
            break;
        case 2:
            mensaje = 'Velocidad media';
            break;
        default:
            mensaje = 'El nivel no existe';
            break;
    }
    return mensaje;
}

console.log(`El ventilador está en ${setVelocidadVentilador('1')} `);//no existe


//----Ejercicio estaciones del año---
/**
 *Preguntar por el numero de mes respondiendo del 1 al 12
 desplegar de acuerdo al mes un alert (mostrarlo en el DOM) la estacion del año
 mes 12 , 1, 2 = invierno
 mes 3, 4, 5 = primaver
 mes 6, 7, 8 = verano
 mes 9, 10, 11 = otoño

 realizar una versión con if-else-elseif y otra con switch
 */

estacionDelAñoIfElse = (numMes = parseInt(prompt('Inserta el numero de mes'))) => {
    let estacion;
    let frase = 'La estacion es ';
    if(numMes === 1 || numMes === 2 || numMes === 12) estacion = frase + 'Invierno';
    else if(numMes >= 3 && numMes <= 5) estacion = frase + 'Primavera';
    else if(numMes >= 6 && numMes <= 8) estacion = frase + 'Verano';
    else if(numMes >= 9 && numMes <= 11) estacion = frase + 'Otoño';    
    else estacion = 'Solo hay 12 meses, te saliste de ese rango';
    return estacion;
}

//alert(estacionDelAñoIfElse());

estacionDelAñoSwitch = (numMes = parseInt(prompt('Inserta el numero de mes'))) =>{

    let estacion;

    switch (numMes) {
        case 1:
        case 2:
        case 12: estacion = 'Invierno'; break;
        
        case 3:
        case 4:
        case 5: estacion = 'Primavera'; break;

        case 6:
        case 7:
        case 8: estacion = 'Verano'; break;

        case 9:
        case 10:
        case 11: estacion = 'Invierno'; break;            
    
        default: estacion = 'Solo hay 12 meses, te saliste de ese rango'; break;
            
    }
    return estacion;

}

//alert(estacionDelAñoSwitch());

//----------Operador ternario------
/*
Es el unico operador de JS que tiene 3 operandos
Generalmente se utiliza como opción a la sentencia if-else

sintaxis
    condicio ? expresionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa

*/ 

const pagoTarjetaCredito = true;
/*
let msj;
if(pagoTarjetaCredito) msj = 'ha realizado el pago de su TC';
else msj = 'no se ha realizado el pago de TC'
*/
const msj = pagoTarjetaCredito  ? 'ha realizado el pago de su TC' : 'no se ha realizado el pago de TC';

document.write(`El usuario ${msj}`);

//----min ejercicio---
/**
 * Preguntar con prompt la edad del usuario: 20
 * si es >= 18 en la consola 'El usuario es mayor de edad'
 * si no cumple, en la consola debe imprimir'El usuario es menor de edad'
 */

mayorOnoEdad = (edad = parseInt(prompt('Ingresa tu edad'))) =>{    
    const mayorEdad = edad >= 18 ? 'Si pasas al antro': 'No pasas al antro'
    return mayorEdad;
}

//console.log(mayorOnoEdad());

//......... Cálculo del factorial de un número usando recursividad ...............

/*function factorialConRecursividad( numero ){
    if ( numero <= 0 ) {
        return 1;
    } else {
        console.log(`${numero} * ${numero-1}`);
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: 
${factorialConRecursividad(5)}`);*/

function factorialConRecursividad( numero = 1 ){
    return numero <= 0 ? 1 : numero * factorialConRecursividad(numero-1);
    
}
console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(3)}`);
