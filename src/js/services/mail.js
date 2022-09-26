const mail = () => {
  const contactForms = document.querySelectorAll('.form'),
    name = document.querySelector('input[name="name"]'),
    phone = document.querySelector('input[name="phone"]'),
    email = document.querySelector('input[name="email"]'),
    message = document.querySelector('textarea[name="message"]');

    

  contactForms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      const formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        message: message.value,
      };
      console.log(formData)

      let xhr = new XMLHttpRequest();
      xhr.open('POST', '/');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
          alert('Email sent');
          name.value = '';
          phone.value = '';
          email.value = '';
          message.value = '';
        } else {
          alert('Something went wrong!...');
        }
      }


      xhr.send(JSON.stringify(formData));
    });
  });
};

export default mail;
