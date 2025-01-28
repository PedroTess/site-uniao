function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/menu-aberto.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imgs/x.png";
    }
}

// Fechar menu ao clicar em um item
document.querySelectorAll('.mobile-menu .nav-item a').forEach(item => {
    item.addEventListener('click', () => {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "imgs/menu-aberto.png";
        }
    });
});


