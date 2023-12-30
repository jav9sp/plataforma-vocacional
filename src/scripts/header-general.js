
let header = document.querySelector('.header');

let flechaHeader = document.querySelector('.flecha-header');

flechaHeader.addEventListener('click', () => {
    header.classList.toggle('mostrar-header');
    flechaHeader.classList.toggle('girar-flecha');
    if (flechaHeader.classList.contains('girar-flecha')) {
        flechaHeader.textContent = 'Cerrar'
    } else {
        flechaHeader.textContent = 'Menú'
    };
})

let menuDesplegable = document.querySelectorAll('.deplegar');

menuDesplegable.forEach(menu =>{

    menu.addEventListener('click', () => {

        menu.classList.toggle('mostrar');

        let altura = 0;

        let subMenu = menu.nextElementSibling;

        if (subMenu.clientHeight === 0) {
            altura = subMenu.scrollHeight
        };

        subMenu.style.height = `${altura}px`;

    });
});