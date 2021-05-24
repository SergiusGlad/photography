<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message']
$source = $_POST["source"];
$term = $_POST["term"];
$medium = $_POST["medium"];
$campaign = $_POST["campaign"];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kuhni-ros@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'MebelRos2020'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('kuhni-ros@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('sergius.glad@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка';
$mail->Body    =  '<b>Имя:</b> ' .$name . '<br><b>Телефон:</b> ' .$phone . '<br><b>Сообщение:</b> ' .$message . '<br><br>UTM-метки: <br><b>source:</b> ' .$source . '<br><b>term:</b> ' .$term . '<br><b>medium:</b> ' .$medium . '<br><b>campaign:</b> ' .$campaign;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: /');
}
?>


