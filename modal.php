<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


// Формирование самого письма
$title = "Новое обращение Ehya";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Сообщение:</b>$message<br>
<b>Ваша почта:</b>$email
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false, //Проверка используемого SSL-сертификата
            'verify_peer_name' => false, //Проверка имени узла
            'allow_self_signed' => true //Разрешение на самоподписанные сертификаты
        )
    );
    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'ilia.zhukovskii.99@mail.ru'; // Логин на почте
    $mail->Password   = 'AKqX08cQgWzi7r0dx0Hv'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ilia.zhukovskii.99@mail.ru', 'Илья Жуковский'); // Адрес самой почты и имя отправителя

    // Получатель письма 
    $mail->addAddress('ilia.zhukovskii.99@mail.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    
  
// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}



} 

catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


// Отображение результата
header('Location: thank.html');
