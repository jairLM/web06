console.log('Sesion js-04 matrices y bucles');

//----Declamos un arreglo de 2 dimensiones(matriz).----
/**
 * Arrays anidados
 * [ [],[],[] ]
 */

const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  /* ByteMe */
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* PerryCode */
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* BugBusters */
];

console.log(`Integrantes de BugBustes ${personasEnCh30[2]}`);
console.log(`Integrantes de BugBustes ${personasEnCh30[2].join(', ')}`);
console.log(`BugBustes integrante n.1 ${personasEnCh30[2][0]}`);

//Hay que reemplazar el nombre de Leo en perryCode por Bryan

personasEnCh30[1].splice(3, 1, 'Brayan')
console.log(`${personasEnCh30[1]}`);

for (let equipo = 0; equipo < personasEnCh30.length; equipo++) {
    for (let persona = 0; persona < personasEnCh30[equipo].length; persona++) {
        console.log(personasEnCh30[equipo][persona]);
        
    }
    
}

//------uso de for ...of------
/*
  Ejecuta una sentencia por cada elementos de un objeto iterable(array, colección, string)
 */

  console.table(personasEnCh30);

  const myPet = 'Kraken';

  for (const letra of myPet){
    console.log(letra);
  } 

  //refactorizar funcion anterior con forEach
  myPet.split('').forEach((letra)=>console.log(letra)); 



 /* for (const equipo of personasEnCh30){
    console.log(equipo);
    for (const persona of equipo) {
        console.log(persona);
    }
  }*/

  //---------forEach--------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Perimite ejecutar una función por cada elemento del arreglo
  
 */
 console.table(personasEnCh30);
function iterarEquipos(equipo, indice, arreglo){
    console.log(`Indice ${indice}: ${equipo}`);
    equipo.forEach(iterarPersonas)
    return equipo;
}

function iterarPersonas(persona, indice, arreglo){
    console.log(`IndicePersona ${indice}: ${persona}`);
    return persona;
}

 //personasEnCh30.forEach(iterarEquipos);

personasEnCh30.forEach((equipo, indice)=> equipo.forEach((persona, indice)=>console.log(persona)));

//---------uso de break------------

/*for (let i = 0; i < 10; i++) {
    if( i > 5 ) break;
    console.log(i);    
}*/

// tabla de multiplicar
/**
 * 1 * 1 = 1
 * 1 * 2 = 2
 * 
 */

for (let i = 1; i <=5; i++) {
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${j} x ${i} = ${j*i}`);
        
    }
    
}

console.log('==============Uso de break============');
rompeCicloSuperior:
for (let i = 1; i <=5; i++) {
    
    for (let j = 1; j <= 10; j++) {
        if(i === 2 && j === 5) break rompeCicloSuperior;
        console.log(`${i} x ${j} = ${j*i}`);
                
    }
    
}

//-------uso de continue-------
/**
 * Termina la ejecución en la iteración actual y continua con la proxima iteracion(o el tag que se indique)
 */
console.log('==============Uso de continue============');
continuaSuperior:
for (let i = 1; i <=5; i++) {
    
    for (let j = 1; j <= 10; j++) {
        if(j > 3) continue continuaSuperior;
        console.log(`${i} x ${j} = ${j*i}`);
                
    }
    
}
