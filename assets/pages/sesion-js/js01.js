console.log("sesion 01");

//7 Datos primitivos
// numbers, string, boolean, undefined, bigint, symbol       d

//Tipos de dato:
//primitivo y no primitivos

//No primitivos:
// Object

//tipo de dato string:
const stringData = "Hola"

//tipo de dato:number
//números positivos, negativos, decimales, NaN, +-infinity

console.log(`Tipos de datos number: ${12}, ${-6}, ${12.36654}, ${125*'hola'}, ${45/0}, ${-45/0}`);

console.log(`Valor máximo represnetable: ${Number.MAX_VALUE}`); //1.7976931348623157e+308
console.log(`Si el valor es mayor a MAX_VALUE como 1.79e+310: ${1.79e+310}`);

console.log(`Valor máximo (entero) seguro en JS:${Number.MAX_SAFE_INTEGER}`);
//cuando se realizan operaciones que superan los limites de MAX_SAFE_INTEGER se pierde presición.

console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1}`);
console.log(`MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2}`);
console.log(`MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3}`);
console.log(`MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4}`);

//Tipo de datos BigInt
//sirven para representar valo numéricos enteros de los que el tipo number no puede representar o no es seguro

console.log(`Operacion con BigInt:`);
const myBigInt = 9007199254740991n
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 1n}`);
console.log(`MAX_SAFE_INTEGER + 2: ${myBigInt + 2n}`);
console.log(`MAX_SAFE_INTEGER + 3: ${myBigInt + 3n}`);
console.log(`MAX_SAFE_INTEGER + 4: ${myBigInt + 4n}`);

//Tipo de dato boolean
//Se tiene 2 estados: true y false
console.log(`Tipo de dato verdadero: ${true}`);
console.log(`Tipo de dato falso: ${false}`);

//Tipo de dato undefined
//Una variable que es declarada pero el tipo de datp no esta definido
let myVar;
console.log(myVar);

//tipo de dato null
//Una variable que intensionalmente se borra el tipo de dato
let myVarNull; //undefined
console.log(`Tipo de dato myVarNull: ${typeof myVarNull}`);//undefined
myVarNull = "No me guta YLE";
console.log(`Tipo de dato myVarNull: ${typeof myVarNull}`);//string
myVarNull = null;
console.log(`Tipo de dato myVarNull: ${typeof myVarNull}`);//object
console.log(`myVarNull es null: ${myVarNull=== null}`);//true

//tipo de dato symbol
//representa un valor único que se utiliza como clave en objetos o identidicador único
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = 'codigo';
console.log(`mySymbol === mySymbol2 : ${mySymbol === mySymbol2}`);

const myObject = {
    clave: 'valor',
    [mySymbol]: 16, // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    myKey : 123,
    [myKey]:567
}
console.log(myObject);

//----------------------------------------------Objetos en JS
//Tipos de dato array
const cancionesCh30 = ['Highway Star', 'Trouble', 'Saoko', 'Rock Dj'];

//Tipos de datos Object
const misDatosDePerfil = {
    name: 'Jair',
    lastname: 'Lopez',
    age: 24,
    isBelicoso: false,
    fullName: function(){
        return `Nombre completo de ${this.name} es: ${this.name} ${this.lastname}` ;
        
        
    }//Agregar una funcion que muestre el nombre completo en mayusculas 
}
console.log(misDatosDePerfil);
console.table(misDatosDePerfil);
console.table(misDatosDePerfil.fullName);
console.log(misDatosDePerfil.fullName()); //metodos llevan parentesis
console.log(misDatosDePerfil.fullName().toUpperCase()); //NOMBRE COMPLETO DE JAIR ES: JAIR LOPEZ


