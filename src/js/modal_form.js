function modal_form () {
  const btns = document.querySelectorAll('[data-modal="consultation"]');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('#consultation');
  const modalClose = document.querySelector('.modal__close');
  btns.forEach(btn=> {
    btn.addEventListener('click', ()=>{
      overlay.classList.toggle('hide');
      modal.classList.toggle('hide');
	    document.body.style.overflow = 'hidden';
    })
  });
  modalClose.addEventListener('click', ()=> {
    overlay.classList.toggle('hide');
    modal.classList.toggle('hide');
	  document.body.style.overflow = '';
  });

}

export default  modal_form;