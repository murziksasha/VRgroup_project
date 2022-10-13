import slider from './slider.js';
import modal_form from './modal_form.js';
import forms from './form.js';
import mask from './mask.js';
import checkinputs from './checkInputs.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  slider();
  modal_form();
  forms();
  mask('[name="phone"]');
  checkinputs('[name="email"]');

  const btn = document.querySelector('.menu-btn');
  const btnBurger = document.querySelector('.menu-btn.btn-burger');
  const nav = document.querySelector('nav.nav');
  const menuBlock = document.querySelector('.menu-burger');
  const menuClose = document.querySelector('.menu-burger__close');

  btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
  });

  btnBurger.addEventListener('click', () => {
    menuBlock.classList.add('active');
    document.body.style.overflow = 'hidden';
    menuClose.addEventListener('click', () => {
      menuBlock.classList.remove('active');
      nav.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });

  try {
    const pushLangSecond = document.querySelector('#pushLangSecond');
    pushLangSecond.addEventListener('click', () => {
      window.location.href = 'ua.html';
    });
  } catch (err) {}

  try {
    const pushLangMain = document.querySelector('#pushLangMain');
    pushLangMain.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  } catch (err) {}

  //array to UP
  (function () {
    'use strict';

    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();
});
