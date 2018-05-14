<?php

$mailTo = "serhiiherasymovych@gmail.com";
$siteName = "Vegas-Kings";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $tel \nПочта: $email";

$subject = "Заявка с сайта \"$siteName\"";
mail($mailTo, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $mailTo");

?>
