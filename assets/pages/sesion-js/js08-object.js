console.log('Sesion js-08');

const registerForm = document.forms["registerForm"];
    
    registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();


    const user = {
        fullname: registerForm.elements['fullname'].value,
        password: registerForm.elements['email'].value,
        email: registerForm.elements['password'].value,
        
    }

    console.table(user); 
   

    
});