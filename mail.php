<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$to = "sergius.glad@yandex.ru";
$subject = 'Заявка с сайта';
$message = "Имя: $name, Номер: $phone";

$success = mail($to,$subject,$message);

if (!$success) {
    echo "Ошибка при выполнении запроса"
}
else {
    echo "Заявка успешно отправлена"
}