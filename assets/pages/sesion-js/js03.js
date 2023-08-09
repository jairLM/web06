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