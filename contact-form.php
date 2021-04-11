<?php include "head.html"?>

<body>
    <div class="header vacancies">
        <?php include_once "menu.html"?>
        <div class="header__banner container">

            <h1 class="header__title">The best-run team</h1>
            <h2 class="header__sub-title">Ключовий актив та основна цінність BEST-RUN CONSULTING - наші спеціалісти,
                іхня кваліфікація та постійний розвиток</h2>
            <div class="header__mobile-button">
                Консультація
            </div>
            <div class="header__expirience">
                <img src="/img/expirience.png" alt="">
            </div>
        </div>
    </div>

    <section class="content">
        <div class="contact__form">
            <div class="contact__form-body container">
                <form action="#" id="form">
                    <h2 class="form__title">Контактна форма</h2>
                    <div class="contact__form-names">
                        <input type="text" class="contact__form-input _req" placeholder="Ім'я" name="name"
                            id="contactName">
                        <input type="text" class="form-input _req" placeholder="Прізвище" name="second-name"
                            id="contactSecondName">
                    </div>
                    <input type="text" class="contact__form-input _req _email" placeholder="Корпоративний e-mail"
                        name="email" id="contactEmail">
                    <input type="text" class="contact__form-input _req" name="phone" placeholder="Телефон">
                    <input type="text" class="contact__form-input _req" placeholder="Компанія" name="company">
                    <input type="text" class="contact__form-input _req" placeholder="Країна" name="country">
                    <textarea name="projectDescription" id="projectDescription" cols="30" rows="10"
                        placeholder="Опис проекту"></textarea>
                    <div class="file">
                        <div id="fileName" class="file__name"></div>
                        <div class="file__item">
                            <input class="file__input" type="file" id="contactFile" name="file">
                            <button class="file__button">Прикріпити файл</button>
                        </div>
                    </div>
                    <button class="contact__form-button" type="submit">Відправити запит</button>

                    <div class="contact__error" id="contactError"></div>

                    <p>Надсилаючи цю форму, я підтверджую, що прочитав та приймаю <a href="#">Політику
                            конфіденційності</a> best-run Consulting</p>
                </form>
            </div>
        </div>
    </section>

    <?php include_once "footer.html"?>

    <?php include_once "scripts.html"?>
    <script src="contact-form.js"></script>
</body>

</html>