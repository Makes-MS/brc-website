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
        <div class="container">
            <div class="vacancies content__section">
                <h2 class="content__title">Приєднуйся до команди</h2>
                <h4 class="content__description">Наша команда постійно росте і відповідно потребує нових облич. Якщо ти
                    завжди мріяв про
                    неймовірний колектив, можливість розвиватися, гідну та своєчасну заробітню плану - тобі
                    до
                    нас. Якщо ти маєш хист до бухгалтерського обліку чи програмування чи просто вмієш гарно
                    комунікувати, сміливо тисни кнопку та приступай до заповнення анкети. Наш хед-хантер
                    тобі
                    залефонує та запропонує умови зустрічі. Ми регулярно проводимо навчальні курси, де ти
                    зможеш
                    навчитися того чим ми займаємося та отримати пропозицію працевлаштування. Ми чекаємо на
                    тебе!</h4>

            </div>
        </div>
        </div>
        <div class="vacancy__form" id="particles-js">
            <form class="container" action="#" method="post" enctype="multipart/form-data">
                <p>Відправити резюме</p>
                <div>
                    <input type="text" name="name" value="" placeholder="Ім'я">
                </div>
                <div>
                    <input type="text" name="surname" value="" placeholder="Прізвище">
                </div>
                <div>
                    <input type="email" name="email" value="" placeholder="e-mail">
                </div>
                <div>
                    <input type="tel" name="tel" value="" placeholder="Номер телефону">
                </div>
                <!-- <div>
                    <input type="file" name="file" id="file" class="inputfile">
                    <label for="file" class="labelfile"><span><img src="../svg/paper-clip.svg" alt="#" width="15px">
                            Прикріпити файл</span></label>

                </div> -->
                <div>
                    <button type="submit">Відправити</button>
                </div>
            </form>
        </div>
    </section>

    <?php include_once "footer.html"?>

    <?php include_once "scripts.html"?>

</body>

</html>