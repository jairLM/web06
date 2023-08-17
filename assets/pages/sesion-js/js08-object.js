console.log('Sesion js-08');

const registerForm = document.forms["registerForm"];
    
    registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();


    const user = {
        fullname: registerForm.elements['fullname'].value,
        password: registerForm.elements['password'].value ,
        email: registerForm.elements['email'].value,
        
    }

    console.table(user);
    postUser(user)
    //debemos convertir el ojeto a formato JSON 

localStorage.setItem('user', JSON.stringify(user) );//key, value
   
});


const postUser = async(userData) =>{
    const url = 'https://reqres.in/api/register';
    //userData.email = 'eve.holt@reqres.in';//se requiere este email
    const responseJson = await fetch( url, {
        method: "POST",//POST, GET, DELETE, PUT
        body:JSON.stringify(userData),//Datos del usuario
        headers: {"Content-Type":"application/json"}
    });
    const  response = await responseJson.json(); //convertir de json a object
    console.log(response);
    response.id && alert(`${response.id} : ${response.token}`);

    //iterar sobre un objeto
    for (const key in response) {
        console.log(`clave: ${key}, value: ${response[key]}`);
    }

}

