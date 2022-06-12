

window.addEventListener('DOMContentLoaded', event => {

    // Reduz a barra de navegação
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#navegar');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navegue-shrink')
        } else {
            navbarCollapsible.classList.add('navegue-shrink')
        }

    };

    // Escolhe a barra de navegação
    navbarShrink();

    //Escolhe a barra de navegação quando a página é rolada
    document.addEventListener('scroll', navbarShrink);

    // navegação principal
    const navegar = document.body.querySelector('#navegar');
    if (navegar) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navegar',
            offset: 74,
        });
    };

    // Recolhe a barra de navegação
    const navbarToggler = document.body.querySelector('.navegue-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
