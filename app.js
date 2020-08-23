'use strict'
let registerUser = document.querySelector('#registerUser')
let list = document.querySelector('#list')
let data = new Date();
let dayOfMonth = data.getMonth()
let arrOfMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа','сентября', 'октября', 'ноября', 'декабря']



let allUser = [];

registerUser.addEventListener('click', function () {
    let newUser = {
        firstName: 0,
        lastName: 0,
    }
    let fullName = prompt('Введите имя и фамилию через пробел')
    newUser.login = prompt('Введите логин')
    newUser.password = prompt('Введите пароль')
    newUser.firstName = fullName.split(' ')[0]
    newUser.lastName = fullName.split(' ')[1]
    newUser.regData = `${data.getDate()} ${arrOfMonth[dayOfMonth]} ${data.getFullYear()}г.,${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
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
    allUser = JSON.parse(localStorage.getItem('allusers')) || []
    render()
}
showLocalStorage()

