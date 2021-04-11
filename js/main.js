
jQuery("document").ready(function ($) {

    const nav = $('.header__menu');
    const navItems = $('.menu__item');
    const bestrun = $('.best-run');
    const consulting = $('.consulting');
    const menuIcon = $('.menu__icon');
    const iconLine = $('.icon__line');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            nav.addClass("_scroll");
            navItems.addClass("_scroll");
            bestrun.addClass("_scroll");
            consulting.addClass("_scroll");
            menuIcon.addClass("_scroll");
            iconLine.addClass("_scroll");
        } else {
            nav.removeClass("_scroll");
            navItems.removeClass("_scroll");
            bestrun.removeClass("_scroll");
            consulting.removeClass("_scroll");
            menuIcon.removeClass("_scroll");
            iconLine.removeClass("_scroll");
        }
    });

});

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};
 
if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuItems = document.querySelectorAll('.sub');
    if (menuItems.length > 0) {
        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            menuItem.addEventListener("click", function (e) {
                menuItem.classList.toggle("_active");
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');
const iconBody = document.querySelector('.menu__body');
const headerLogo = document.querySelector('.header__logo2');
const mobileLine = document.querySelector('.mobile__line');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        mobileLine.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
        iconBody.classList.toggle('_active');
        headerLogo.classList.toggle('_active');

    })
}

