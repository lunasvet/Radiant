/*Достаём элементы для первого пупапа*/
const openPopup = document.getElementById('open-pop-up');
const closePopup = document.getElementById('popup-close');
const popup = document.getElementById('popup');


/*Достаём элементы для второго пупапа*/
const secondPopup = document.getElementById('open-pop-up-2');
const closePopup2 = document.getElementById('popup-close-2');
const popup2 = document.getElementById('popup-2');

/*Достаём элементы для для третьего пупапа*/
const openPopup3 = document.getElementById('open-popup-3');
const closePopup3 = document.getElementById('popup-close-3');
const popup3 = document.getElementById('popup-3');

/*Достаём элементы для для четвёртого пупапа*/
const openPopupStatus = document.getElementById('open-popup-4');
const popup4 = document.getElementById('popup-status');

/*Достаём элементы для кнопки создать портфолио*/
const  openPopupCreate = document.getElementById('create-portfolio');

/*Достаём элементы для кнопки войти на пупапе регистрации*/
const openPopupLogin = document.getElementById('open-popup-login');

/*Достаём элементы для кнопки регистрации на пупапе войти*/
const openPopupReg = document.getElementById('open-popup-reg');

/*Достаём элементы для кнопки войти на пупапе восстановления пароля*/
const thirdPopupToLog = document.getElementById('open-popup-log-3');
/*Достаём элементы для кнопки регистрации на пупапе восстановления пароля*/
const thirdPopupToReg = document.getElementById('open-popup-reg-3');
/*Достаём элементы для кнопки спасибо на пупапе уведомления*/
const ok= document.getElementById('ok');


/*Функции для первого пупапа*/
openPopup.addEventListener('click', function (e){
    e.preventDefault();
    popup.classList.add('active');
})
closePopup.addEventListener('click', ()=>{
    popup.classList.remove('active');
})

/*Функции для второго пупапа*/
secondPopup.addEventListener('click', function (e){
    e.preventDefault();
    popup2.classList.add('active');
})
closePopup2.addEventListener('click', ()=>{
    popup2.classList.remove('active');
})

/*Функции для третьего пупапа*/
openPopup3.addEventListener('click', function (e){
    e.preventDefault();
    popup3.classList.add('active');
    popup2.classList.remove('active');
})
closePopup3.addEventListener('click', ()=>{
    popup3.classList.remove('active');
})
/*Функции для четвёртого пупапа*/
openPopupStatus.addEventListener('click', function (e){
    e.preventDefault();
    popup4.classList.add('active');
    popup3.classList.remove('active');
})

/*Функции для кнопки создать портфолио*/
openPopupCreate.addEventListener('click', function (e){
    e.preventDefault();
    popup.classList.add('active');
})
/*Функции для кнопки войти на пупапе регистрации */
openPopupLogin.addEventListener('click', function (e){
    e.preventDefault();
    popup2.classList.add('active');
    popup.classList.remove('active');
})
/*Функции для кнопки регистрации на пупапе войти*/
openPopupReg.addEventListener('click', function (e){
    e.preventDefault();
    popup.classList.add('active');
    popup2.classList.remove('active');
})
/*Функции для кнопки войти на пупапе восстановления пароля*/
thirdPopupToLog.addEventListener('click', function (e){
    e.preventDefault();
    popup2.classList.add('active');
    popup3.classList.remove('active');
})
/*Функции для кнопки регистрации на пупапе восстановления пароля*/
thirdPopupToReg.addEventListener('click', function (e){
    e.preventDefault();
    popup.classList.add('active');
    popup3.classList.remove('active');
})
/*Функции для кнопки спасибо на пупапе уведомления*/
ok.addEventListener('click', function (e){
    e.preventDefault();
    popup4.classList.remove('active');
})

