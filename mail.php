<?php

$to = 'serhiiherasymovych@gmail.com';
$subject = 'Partners';
$message = $_POST['name'];
$message .= $_POST['tel'];
$message .= $_POST['email'];

mail($to, $subject, $message);

?>