//Регистрация

let loginInput = document.querySelector('#login');
let passwordInput = document.querySelector('#password');
let clickButton = document.querySelector('#click');
let result = document.querySelector('#result')

let users = [];


clickButton.addEventListener('click', () => {
    result.innerHTML = ''
    
    if (loginInput.value.trim() === '' || passwordInput.value.trim() === '') {
      result.innerHTML = 'Please enter your login and password.';
      result.style.color = 'red';
      return;
    }
  
    const user = {};
    user.login = loginInput.value; 
    user.password = passwordInput.value; 
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users); 

    loginInput.value = '';
    passwordInput.value = '';
  });
  

const savedData = localStorage.getItem('users');
if (savedData) {
  users = JSON.parse(savedData);
}

//Вход (авторизация)

let loginIn = document.querySelector('#loginIn');
let passwordIn = document.querySelector('#passwordIn');
let enterButton = document.querySelector('#enter');
let resultLogin = document.querySelector('#resultLogin');

enterButton.addEventListener('click', () => {
    resultLogin.innerHTML = '';

    if (loginIn.value === '' || passwordIn.value === '') {
        resultLogin.innerHTML = 'Please enter your login and password.';
        resultLogin.style.color = 'red';
        return;
    }

    const savedData = localStorage.getItem('users');
    if (savedData) {
        const users = JSON.parse(savedData);
        const user = users.find((person) => person.login === loginIn.value && person.password === passwordIn.value);

        if (user) {
            resultLogin.innerHTML = 'Success';
            resultLogin.style.color = 'green';
        } else {
            resultLogin.innerHTML = 'Error: Incorrect login or password.';
            resultLogin.style.color = 'red';
        }
    } else {
        resultLogin.innerHTML = 'Error: No users found.';
        resultLogin.style.color = 'red';
    }
    loginIn.value = '';
    passwordIn.value = '';
});

