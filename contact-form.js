"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const errorDiv = document.getElementById('contactError');
    // const contactForm = document.getElementsByClassName('.contact__form')
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('file', contactFile.files[0])

        if (error === 0) {
            form.classList.add('_sending')
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                fileName.innerHTML = "";
                errorDiv.innerHTML = "Відправлено. Дякую. Ми з вами зв'яжемось у найближчий час!"
                form.reset();
                form.classList.remove('_sending')
            } else {
                form.classList.remove('_sending')
                errorDiv.innerHTML = "Помилка відправлення! Спробуйте пізніше!"
            }

        } else {
            errorDiv.innerHTML = "Заповніть усі необхідні поля форми"
        }

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {

                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error')
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error')
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    const contactFile = document.getElementById('contactFile');
    const fileName = document.getElementById('fileName');

    contactFile.addEventListener('change', () => {
        uploadFile(contactFile.files[0]);
    });

    function uploadFile(file) {

        if (file.size > 10 * 1024 * 1024) {
            fileName.classList.add('_upto')
            fileName.innerHTML = "Файл не більше 10 Мб";
            return;
        }

        var reader = new FileReader();

        reader.onload = function (e) {

            if (fileName.classList.contains('_upto')) {
                fileName.classList.remove('_upto');
            }

            fileName.innerHTML = `${file.name} (${Math.round(file.size / 1024)} Кб)`;
        };
    
        reader.onerror = function (e) {
            alert ('Помилка');
        };

        reader.readAsDataURL(file);
    }

});