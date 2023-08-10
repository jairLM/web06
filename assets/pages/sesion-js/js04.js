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

  for (const equipo of personasEnCh30){
    console.log(equipo);
    for (const persona of equipo) {
        console.log(persona);
    }
  }

  //---------forEach--------
