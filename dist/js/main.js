import slider from"./slider.js";import modal_form from"./modal_form.js";import forms from"./form.js";import mask from"./mask.js";import checkinputs from"./checkInputs.js";document.addEventListener("DOMContentLoaded",(()=>{"use strict";var o;slider(),modal_form(),forms(),mask('[name="phone"]'),checkinputs('[name="email"]'),o=document.querySelector(".back_to_top"),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&o.classList.add("back_to_top-show"),e<t&&o.classList.remove("back_to_top-show")})),o.addEventListener("click",(function o(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(o,0))}))}));