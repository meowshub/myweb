/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -10%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
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

window.addEventListener('scroll', function() {
    var storyLink = document.getElementById('about');
    if (storyLink !== null) { 
        var scrollPosition = window.scrollY;
        var showAtPosition = 5;
        if (scrollPosition >= showAtPosition) {
            storyLink.classList.add('visible');
        }
    }
});

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var goTopButton = document.getElementById('BackTop');
    if (goTopButton !== null) { 
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                goTopButton.classList.add('show');
            } else {
                goTopButton.classList.remove('show');
            }
        });
    }
});
if (typeof jQuery !== 'undefined') {
    $(document).ready(function(){
        $("#BackTop").click(function(){
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });
}