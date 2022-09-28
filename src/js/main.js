import slider from "./slider.js";
import modal_form from "./modal_form.js";
import forms from "./form.js";
import mask from './mask.js';
import checkinputs from './checkInputs.js';






document.addEventListener('DOMContentLoaded',()=>{
  "use strict";
  
  slider();
  modal_form();
  forms();
  mask('[name="phone"]');
  checkinputs('[name="email"]');

    //array to UP 
    (function() {
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