//Eventos no meu mobile
let btnMenuMob = document.querySelector('#btn-menu-mob');
let line1 = document.querySelector('.line-menu-mob-1');
let line2 = document.querySelector('.line-menu-mob-2');
let menuMobile = document.querySelector('#menu-mobile');

let body = document.querySelector('body');

btnMenuMob.addEventListener("click", () => {
    line1.classList.toggle('activo1');
    line2.classList.toggle('activo2');
    menuMobile.classList.toggle('abrir');

    body.classList.toggle('no-overflow');
});