

const checkinputs = selector => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('keypress', e =>{
      if(e.key.match(/[^a-z 0-9 @ \.]/gi)) {
        e.preventDefault();
      }
    });
  });
}


export default checkinputs;