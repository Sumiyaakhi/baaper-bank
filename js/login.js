document.getElementById('btn-submit').addEventListener('click', function(){
    // always remember to use .value to get text from an input field.
    const emailField  = document.getElementById('user-email');
    const  email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('password thik kor betta!')
    }
})