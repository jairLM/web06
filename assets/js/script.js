console.log("Página en contruccion con Patricio Estrella");

clickPatricio = () =>{
    alert("La mayones es un instrumento?")
}

changeColor = (elementHtml, color) =>{
    
    elementHtml.style.color = color

}

pideColor = (elementHtml) =>{
    let color = prompt("Que color quieres");
    elementHtml.style.color = color
    elementHtml.innerHTML="<h3> ahora soy "+ color + "</h3>";


}

function regresarColor () {
    const refRedColor = document.getElementById('red-color');
    const refGreenColor = document.getElementById('green-color');
    const refPurpleColor = document.getElementById('purple-color');
    const refUserColor = document.getElementById('user-color');

    changeColor(refRedColor, 'black');
    changeColor(refGreenColor, 'black');
    changeColor(refPurpleColor, 'black');
    changeColor(refUserColor, 'black');
}

function escribeNombre(){
    const saludo = document.getElementById('saludo');
    const nombre = prompt("¿Cual es tu nombre?");    
    saludo.innerHTML= `<h3> Hola, ${nombre}</h3>` 
    
}