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

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector("header"); // Pegando o header para calcular o tamanho
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          e.preventDefault();
          
          const headerHeight = header.offsetHeight; // Calcula a altura do header
  
          window.scrollTo({
            top: targetSection.offsetTop - headerHeight, // Corrige a posição da rolagem
            behavior: "smooth"
          });
        }
      });
    });
  });
  


