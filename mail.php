<?php
if ($_POST[name]!="" && $_POST[tel]!="" && $_POST[email]!="") {
	$allmsg="";
	$headers = NULL;
	$headers .= "Content-Type: text.html; charset=utf8\r\n";
	$headers .= "From: <sherasymovych@firstgaming.com>\r\n";

	$allmsg .= "
		Имя: $_POST[name] <br/>
		Телефон: $_POST[tel] <br/>
		Электронная почта: $_POST[email] <br/>
	";
	mail("serhiiherasymovych@gmail.com", $allmsg, $headers);
	header("Location: ./index.html");
	echo"<script>document.location.href = './index.html';</script>";
}
?>