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

//Haciendo una promesa con parámetros

/**
 * Salud especial para las personas que comienzan con A, retardo de 5 seg
 * saludo especial para personas que empieza su nombre con l
 * @param {string} name 
 */
     const gretting= (name) =>{
        const myPromise = new Promise( (resolve, reject)=>{
        const firstChar = name.charAt(0).toLowerCase();
            if( firstChar === 'a' ) //resolve({code:200, message: `Soy ${name}, ¡Hola a todos!`});
            setTimeout(() =>resolve({code:200, message: `Soy ${name}, ¡Hola a todos!`}), 5000);
            else if( firstChar === 'l' ) resolve({code:200, message: `Soy ${name}, Saludos a toda la banda de la ch30 taka taka taka taka taka viene viene viene viene takta taka taka taka`});
            else reject({code:404, message: `No esto disponible para ${name}`});

        } );//fin de promesa
        return myPromise

     }
     gretting('Ana')
        .then( (response)=> console.log(response.code, response.message)  )
        .catch( (error)=> console.log(error.code, error.message)  );

     gretting('luisa')
        .then( (response)=> console.log(response.code, response.message)  )
        .catch( (error)=> console.log(error.code, error.message)  );

     gretting('eduardo')
        .then( (response)=> console.log(response.code, response.message)  )
        .catch( (error)=> console.log(error.code, error.message)  );




