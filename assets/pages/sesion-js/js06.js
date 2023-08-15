console.log('JS-06 Manipulación del DOM');

//Modificar un elemento HTML por medio de su ID

const findElementById = () =>{
    const title = document.getElementById('title');
    console.log(title.innerHTML);
    //title.innerHTML = 'Hola BB'
    title.innerHTML = `<span id="generation" class="text-primary"> Generation </span> - Sesion JS-06`
    
}

findElementById();

//-----------Encontrar elementos por su etiqueta (tag)-------

const changeElmentByTagName = () =>{
    const unorderList = document.getElementsByTagName('li');//colección de elementos
    console.log(unorderList);
    for (const listItem of unorderList) {
        listItem.innerHTML = `<span class="text-success" >${listItem.innerHTML} 🛸</span>`
    }

}

changeElmentByTagName();

//-----selector universal(querrySelector)-------
const findElementByQuerrySelector = () =>{
    //const element = document.querySelector('#title');
    //const element = document.querySelector('.text-warning');
    //const element = document.querySelector('ul');
    //const element = document.querySelector('li');
    const element = document.querySelector('h1 span')
    console.log(element);
}

findElementByQuerrySelector();

//-----crear un nuevo elemento en HTML
//appendChild

const newElement = () =>{
    const newElement = document.createElement('div'); //<div></div>

    newElement.innerHTML = `La CH30 le gusta:
                            <ul>
                            <li>El helado</li>
                            <li>El chisme</li>
                            <li>Los corridos tumbados</li>
                            </ul>`
const descriptionCh30 = document.querySelector('#descriptionCh30');
descriptionCh30.appendChild(newElement);

}
newElement(); 

//-----cambiar color del texto-----
//style.color

const changeColor = (color) =>{
    const descriptionCh30 = document.getElementById('descriptionCh30');
    descriptionCh30.style.color = color; //cambio de color de fuente
    descriptionCh30.style.border = `2px solid ${color}`;
    descriptionCh30.style.borderRadius = `5px`
}

changeColor('pink');

//------Propiedades de visualización-------
//Desaparecer elemento
//display: none (quitar el elemento del DOM)
//visibility: hidden (ocultar el elemento)

const getRefTitleGneration = () =>{
    return document.getElementById('generation');
}

const displayNoneElement = () =>{
    const generation = getRefTitleGneration();
    generation.style.display = `none`;//quita elemento
}
const hiddenElement = () =>{
    const generation = getRefTitleGneration();
    generation.style.visibility = `hidden`;//ocultar elemento
}
const resetElements = () =>{

    const generation = getRefTitleGneration();
    generation.style.visibility = `visible`;
    generation.style.display = `inline`;

}




