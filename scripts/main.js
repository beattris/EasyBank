let form = document.getElementById('form-wrapper');
let myForm = document.getElementById('myForm');
let submit = document.getElementById('submit');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let email = document.getElementById('mail');
let show = document.getElementById('show');


show.addEventListener('click', () =>{
    if (form.classList.contains('d-none') && show.classList.contains('d-inline-block')){
        form.classList.remove('d-none');  
        show.classList.remove('d-inline-block');
        show.classList.add('d-none');
    }
    else{
       form.classList.add('d-none');
    } 
});

myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateForm();
})

function validateForm(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    

    if(firstNameValue === '' || firstNameValue === null){
        showError(firstName, 'first name cannot be blank');
    }else if(firstNameValue.length < 3){
        showError(firstName, 'first name must be up to 3 letters');
    }else{
        showSuccess(firstName);
    }

    if(lastNameValue  === '' || lastNameValue === null){
        showError(lastName, 'last name cannot be blank');
    }else if(lastNameValue.length < 3){
        showError(lastName, 'last name must be up to 3 letters');
    }
    else{
        showSuccess(lastName);
    }

    if(emailValue === "" || emailValue === null){
        showError(email, 'email address cannot be blank');
    }else if(!isValidEmail(emailValue)){
        showError(email, 'pls enter valid email address!');
    }
    else{
        showSuccess(email);
        alert(`Invitation sent successfully! \n Pls check your email!`);
        form.classList.add('d-none');
        show.classList.add('d-inline-block');
    }
}

function showError(input, message){
    const inputsWrapper = input.parentElement;
    const small = inputsWrapper.querySelector('small');
    small.innerText = message;
    inputsWrapper.className = 'inputs-wrapper error';
}

function showSuccess(input){
    const inputsWrapper = input.parentElement;
    inputsWrapper.className = 'inputs-wrapper success';
}

function isValidEmail(email){
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
}













