'use strict'
let registerUser = document.querySelector('#registerUser')
let list = document.querySelector('#list')
let login = document.querySelector('#login')
let usernameSpan = document.querySelector('#username')

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
    } while (fullName.trim().split(' ').length !== 2)

    let data = new Date();
    let dayOfMonth = data.getMonth()

    newUser.login = prompt('Введите логин')
    newUser.password = prompt('Введите пароль')
    newUser.firstName = fullName.split(' ')[0]
    newUser.lastName = fullName.split(' ')[1]
    newUser.regData = `${addZero(data.getDate())} ${arrOfMonth[dayOfMonth]} ${data.getFullYear()}г.,${addZero(data.getHours())}:${addZero(data.getMinutes())}:${addZero(data.getSeconds())}`
    console.log(newUser);
    allUser.push(newUser);
    localStorage.setItem('allusres', JSON.stringify(allUser));
    render()

})


let render = function () {
    list.innerHTML = ''
    allUser.forEach((item) => {
    const li = document.createElement('li')
    li.innerHTML = `Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regData} <button class="todo-remove">-</button>`
        list.append(li)

        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', function () {
            let index = allUser.indexOf(item)
            allUser.splice(index,1);
            localStorage.setItem('allusres', JSON.stringify(allUser));
            li.remove()
        })
    })
}

login.addEventListener('click', () => {
    let log = prompt('Введите логин')
    let pass = prompt('Введите пароль')
    console.log(allUser);
    let a = allUser.find(item => item.login === log && item.password === pass)
    if (a === undefined) {
        alert('Пользователь не найден')
    } else { usernameSpan.textContent = a.firstName }
})

let showLocalStorage = function() {
    allUser = JSON.parse(localStorage.getItem('allusres')) || []

    render()
}
showLocalStorage()

