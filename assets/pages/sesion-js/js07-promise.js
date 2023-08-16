console.log('js07-promise');

/**
 * Las promesas son un patrón asincrónico que se utiliza para manejar operaciones asíncronas
 * 
 * las promeras permiten realizar tareas asíncronas y manejar los resultados (éxito o error) en un elemento posterior
 * 
 * Las promesas tienen 3 estadoos:
 * 1.-Pending: El estado inicial de uan promesa antes de que se resuelva o rehacer
 * 2.- Resalve: La promersa se resuelve con un valor
 * 3.- Rejected: La promesa se rechaza con una razón 
 * 
 * Resolve y reject son funciones de callBack
 * 
 * sintaxis: se utiliza la clase Promise
 *  const pinkyPromise = new Promise(fncCB);
*/
    // const pinkyPromise = new Promise(fncCB);
     //const pinkyPromise = new Promise( (fncCallBackResolve, fncCallBackReject)=>{} );
     const pinkyPromise = new Promise( (fncCallBackResolve, fncCallBackReject)=>{
        const menorEdad = false;
        if(menorEdad)
            fncCallBackResolve('Hay que estar siempre juntos');
        else
            fncCallBackReject({code:404, message:'Ni te topo'});

     } );

//-------consumir las promesas---------
//Se usa los métodos the, catch y finally

console.log('---------------> promesas <------------');
console.log('Antes de consumir la promesa');
//pinkyPromise();//Esto da un error no es una funcion
//pinkyPromise.then().catch().finally()//forma correcta de consumir una promesa
/*pinkyPromise
    .then()//se ejecuta una funcion de callback si la promesa fue resuelta
    .catch()//se ejecuta una funcion de callback si la promesa fue rechazada
    .finally()//se ejecuta una funcion de callback despues de que la promesa fue resuelta o rechazada*/
pinkyPromise
    .then( (response)=>console.log(`Promesa resuelta ${response}`) )
    .catch( (error)=>console.log(`Promesa rechazada ${error.code}`) )
    .finally( ()=>console.log(`Se ha terminado de resolver la promesa`) )
console.log('Despues de consumir la promesa');