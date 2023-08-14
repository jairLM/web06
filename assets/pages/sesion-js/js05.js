console.log('Condiciones y expresiones');

//Operadores aritméticos
/** 
 * adicion +
 * multiplicación *
 * substraccion -
 * división / 
 * residuo %
 * exponencial ** - Math(2,3) 

 */
//----------Precedencia de operadores----------
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const operadores = 5 * 2 + 3 ** 2 - 4;//15
console.log(operadores);

console.log(4 % 3 + 2 * 3 / 2 - 1);


//-----Operadores de asignación-----
/**
 * Asigna un valor a su operador izquierdo basándose en el valor de su operador derecho
 * asiganacio =
 * Operador abreviados (compuestos):
 * op1 += op2 -> op1 = op1 + op2
 * op1 -= op2 -> op1 = op1 - op2
 * op1 *= op2 -> op1 = op1 * op2
 */

let asignacion = 3;
console.log( asignacion += 3 * 3 ** 3 + 10);//94
console.log( asignacion += 3 * 3 ** 3 + 10);//185
console.log(2 ** 3 ** 2);//512

//-------Operadores Unarios--------
//Solo actuan sobre un operando
// negación 
let numero = -3;
let dinero = -numero;//-3
//conversión numérica
let pago = + dinero//-3, no se le cambia el signo
let interes = + '5.23'; //5.23 numerico
console.log(typeof interes);
interes = 3;
console.log(interes += 5 + + '3');

//---operador lógico NOT---
let isActive = !true; //false
//Operador de incremento y decremento en unidad
/**
 * operador de pre-incremento y pre-decremento
 * ++ valor
 * -- valor
 * 
 * 
 * 
 * operador de post-incremento y post-decremento
 * valor ++
 * valor --
 * 
 * 
 */

let number = 20;

console.log(++number);
console.log(number ++);
console.log(number);

let index = 0;
for (        ; index < 5; index++) {
    console.log(index);
}

console.log(`Valor index: ${index}`);//5

let a = 0, b = 0;
for ( ; a < 3; b = a++) {
    console.log(a,b);
    
}
console.log(a,b);//3,2

let x = 3;                              //x   y
let y = ++x;                            //4   4
console.log(`x : ${x++} y : ${++y}`);   //4->5  5
console.log(`x : ${x} y : ${y}`);       //5   5

//------operadores lógico && y ||-----
/**
 * Tlabien son conocidos como operadores de corto circuito (short-circuit operators)
 * 
 * &&: se detiene tan pronto se encuentra un operdor falso, ya no se evalua el segundo parámetro
 * 
 * OP1 && OP2 Si OP1 es verdadero, se realiza la expresión de OP2
 * || :Si OP1 es verdadero, se realiza la expresión de OP1, no se realiza la expresión de OP2
 *  
 *  
 */

const val1 = true, val2 = false, val3 = true;

console.log(val1 || val2 && val3); //true

// Conversión a booleano
// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined

console.log( val1 && 'Hola' );//'Hola'
console.log( val2 && 'Hola' );//false
console.log( NaN && 'Hola' );//NaN
console.log( 'false' && 'Hola' );//'Hola'
console.log( '' && 'Hola' );//''
console.log( 'Hola' && '' );//''

console.log('activado' || '');//'activado'
console.log('activado' || papasFritas);//'activado'


const person = {
    name: 'Leo',
    lastName:'Ronaldo',
    age:25

};

console.log(`Nombre: ${person.name}`);
console.log(`Nombre: ${person["name"]}`);

//const occupation = person.occupation;//undefined

//const occupation = person.occupation === undefined ? 'Software Engineer' : person.occupation
//console.log(`Ocupación: ${occupation}`);

const occupation = person.occupation || 'Software Engineer';//corto circuito
//const occupation = person.occupation ?? 'Software Engineer';//operador nullish coalescing
console.log(`Ocupación: ${occupation}`);

//--------comparación estricta-----
/**
 * === Estrictamente igual, se debe de comparar el valor y el tipo de dato
 !== Estrictamente diferente, debe ser diferente el valor y el tipo  de dato
 */

 console.log('23' === 23);//false
 console.log('true' === true);//false
 console.log('true' == true);//false
 console.log('45' !== 45);//true
 console.log(NaN === NaN);//false

 //------operador de desestructuración(Destructuring)-----
 /**
  * Es un expresión en JS que hace posible extraes datos de arreglos u objetos y nos ayuda a realizar asignaciones mas complejas.
  */

 let dataA = 10;
 let dataB = 20;

 console.log(`A: ${dataA}, B: ${dataB}`);

 [dataA, dataB] = [dataB, dataA]

 console.log(`A: ${dataA}, B: ${dataB}`);

const car = {
    model:'Vento',
    brand:'VW',
    year:2023,
    color:'red',
    price:320_000,
    additionalInfo:{
        bluetooth : true,
        cruiseControl : true,
        gps : false
    }

};
//console.log(`Modelo: ${car.model}`);
//console.log(`Año: ${car.year}`);
//console.log(`Año: ${car.year}`);

//const carModel = car.model;
//const carYear = car.year;
const {model : ventoModel, year, additionalInfo:{bluetooth}} = car

console.log(`Modelo: ${ventoModel}`);
console.log(`Año: ${year}`);
//console.log(`Tiene bluetooth: ${car.additionalInfo.bluetooth ? 'si' : 'no'}`);
//console.log(`Tiene bluetooth: ${additionalInfo.bluetooth ? 'si' : 'no'}`);
console.log(`Tiene bluetooth: ${bluetooth ? 'si' : 'no'}`);

//---Ejercicio---
/**
 * Hacer una función que realice la división de 2 números y entregue (return) en entero el cociente y el residuo
 */

/*division = () =>{
    dividendo = 10;
    divisor = 4;
    return total = {
        cociente: parseInt(dividendo/divisor),
        residuo : dividendo%divisor
    }

}
console.log(division());*/

division = () =>{
    let dividendo = 10;
    let divisor = 4;
    let cociente =  parseInt(dividendo/divisor);
    let residuo = dividendo%divisor;
    return {cociente, residuo};

}

const {cociente, residuo} = division();


console.log(`división: ${cociente}, residuo: ${residuo}`);

