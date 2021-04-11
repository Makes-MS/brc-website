<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // Від кого лист
    $mail->setFrom('send@consulting.com.ua', 'Форма сайту');
    
    // Кому відправити
    $mail->addAddress('chaluy99@gmail.com')

    // Тема листа
    $mail->Subject = 'Заповнена форма на сайті'



    // Тіло письма
    $body = '<h1>Лист із сайту</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Імя:</strong> '.$_POST['name'].'</p>';
    }
    
    if(trim(!empty($_POST['second-name']))){
        $body.='<p><strong>Прізвище:</strong> '.$_POST['second-name'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>e-mail:</strong> '.$_POST['email'].'</p>';
    }

    if(trim(!empty($_POST['company']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['company'].'</p>';
    }

    if(trim(!empty($_POST['country']))){
        $body.='<p><strong>Компанія:</strong> '.$_POST['country'].'</p>';
    }

    if(trim(!empty($_POST['projectDescription']))){
        $body.='<p><strong>Опис проекту:</strong> '.$_POST['projectDescription'].'</p>';
    }

    $mail->Body = $body;


    if (!$mail->send()) {
        $message = 'Помилка';
    } else {
        $message = 'Дані відправлено!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>