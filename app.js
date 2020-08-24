'use strict'
let registerUser = document.querySelector('#registerUser')
let list = document.querySelector('#list')

let arrOfMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа','сентября', 'октября', 'ноября', 'декабря']



let allUser = [];

const addZero = n => n < 10 ? '0'+ n : n;

registerUser.addEventListener('click', function () {
    let newUser = {
        firstName: 0,
        lastName: 0,
    }
    let fullName;
    do {
        fullName = prompt('Введите имя и фамилию через пробел')
    // console.log(fullName.split(' ').length);
    } while (fullName.trim().split(' ').length !== 2)

    let data = new Date();
    let dayOfMonth = data.getMonth()

    newUser.login = prompt('Введите логин')
    newUser.password = prompt('Введите пароль')
    newUser.firstName = fullName.split(' ')[0]
    newUser.lastName = fullName.split(' ')[1]
    newUser.regData = `${addZero(data.getDate())} ${arrOfMonth[dayOfMonth]} ${data.getFullYear()}г.,${addZero(data.getHours())}:${addZero(data.getMinutes())}:${addZero(data.getSeconds())} <button class="todo-remove">-</button>`
    console.log(newUser);
    allUser.push(newUser);
    localStorage.setItem('allusres', JSON.stringify(allUser));
    render()

})


let render = function () {
    list.innerHTML = ''
    allUser.forEach((item) => {
    const li = document.createElement('li')
    li.innerHTML = `Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regData}`
        list.append(li)
    })
}

let showLocalStorage = function() {
    allUser = JSON.parse(localStorage.getItem('allusres')) || []
    render()
}
showLocalStorage()

