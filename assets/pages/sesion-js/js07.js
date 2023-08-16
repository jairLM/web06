console.log('JS-07 asincronía');

//-----programacion sincrónica
const primerPaso =()=>{
    console.log('01-inicio de mi programa');
}
const segundoPaso =()=>{
    console.log('02-Desarrollp de mi programa');
}
const tercerPaso =()=>{
    console.log('03-Fin de mi programa');
}

primerPaso();
segundoPaso();
tercerPaso();

//-------programacion asíncronica-------
/**
 * setTimeout()
 * Establece un temporizador que ejecuta una función de callback
 * una vez que expiere el temporizador
 * 
 * sintaxis;
 *  setTimeout(fncCallBack, tiempo_milisegundos);
 *  setTimeout(()=>{}, tiempo_milisegundos);
 */


    const saludo = (nombre) => console.log(`Hola ${nombre}`);

    const pasoAsincrono = (nombre) =>{
        //setTimeout(  saludo, 5000, nombre  );
        //setTimeout((persona)=>console.log(`Hola ${persona}`), 5000, nombre);
        setTimeout(()=>console.log(`Hola ${nombre}`), 5000);
    } 

    console.log('**********************');
    //primerPaso();
    //pasoAsincrono('Jair');
    //tercerPaso();
    
    //-----Set interval----------
    //ejecuta una función de manera reiterada con un tiempo de retardo fijo

    const pasoConIntervalo = () =>{
        setInterval(() => {
            console.log('Hola '+ new Date().toLocaleString() );
        }, 3000);
    }
    //primerPaso();
   // pasoConIntervalo();
    //tercerPaso();

    //--------Detener un setInterval------------

    const iniciarInterval = document.getElementById('iniciar-interval');
    const detenerInterval = document.getElementById('detener-interval');
    const dateH2 = document.getElementById('dateH2');

    let idInterval=[];//referencia del id que nos proporciona serYnterval
    
    iniciarInterval.addEventListener('click', ()=>{
        const id = setInterval(()=>{dateH2.innerHTML = new Date().toLocaleString()}, 1000);
        idInterval.push(id);
        disableStartButton();
    });

    detenerInterval.addEventListener('click', ()=>{
        console.table(idInterval);
        clearInterval(idInterval.pop());//Detener el intervalo
        enableStartButton();
        
    });

    const stateButtons = (startButtonState = false,  stopButtonState = false)=>{
        //iniciarInterval.disabled = startButtonState;
        //detenerInterval.disabled = stopButtonState;
        iniciarInterval.style.display = startButtonState ? 'none': 'inline';
        detenerInterval.style.display = stopButtonState ? 'none': 'inline';
    };

    const disableStartButton = () =>{
        stateButtons(true, false);
    }
    const enableStartButton = () =>{
        stateButtons(false, true);
    }
    enableStartButton();