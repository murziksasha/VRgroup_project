const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          texts = document.querySelectorAll('textarea'),
          phoneInputs = document.querySelectorAll('input[name="phone"]');

  
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
  
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
  
        return await res.text();
    };
  
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        texts.forEach(item => {
          item.value = '';
        })
    };
  
    form.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();


  
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
  
            const formData = new FormData(item);

  
            postData('mailer/smart.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
        });
    });
  };
  
  export default forms;