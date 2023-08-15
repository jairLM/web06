console.log('Formulario');
//Obtenermos la referencia del formulario
const registerForm = document.forms["registerForm"];
    
    registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();//omitir acciones por default
//console.log(e);
    /* const email= registerForm.elements['email'];
    const birthdate = registerForm.elements['birthdate'];
    console.log(email.value, birthdate.value); */
    const user = {
        fullname: registerForm.elements['fullname'].value,
        password: registerForm.elements['email'].value,
        email: registerForm.elements['password'].value,
        birthdate: registerForm.elements['birthdate'].value
    }
    const age = calculateAge(user);
   
    if (age.year < 18){
        /* alert('al rato regresas') */
        appendAlert('al rato regresas ', 'success')
    }
});
 




const calculateAge = ( {birthdate: birthdateStr} ) =>{
    console.log(birthdateStr);

    const today = new Date();//crear fecha actual
    const birthdate = new Date(birthdateStr) //objeto con la fecha 1998/12/01
    const difference = today - birthdate;
    console.log(difference);
    const age = new Date(difference);
    //console.log(age);
    console.log(`Years: ${age.getFullYear() - 1970 }`);
    console.log(`Month: ${age.getMonth()}`);
    console.log(`Day: ${age.getDate() }`);
    return{
        year:age.getFullYear() - 1970 ,
        month:age.getMonth() ,
        day: age.getDate()
    }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

/* const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
} */