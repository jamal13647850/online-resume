<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if( $name == '' ){
	echo '0';
}
else if( $email == '' ){
	echo '0';
}
else if(filter_var($email, FILTER_VALIDATE_EMAIL) == false){
	echo '0';
}
else if( $subject == '' ){
	echo '0';
}
else if( $message == '' ){
	echo '0';
}
else{

	//Place your Email Here
	$recipient = "info@jamalghasemi.com";

	$formcontent="نام: $name\nایمیل: $email\nموضوع: $subject\n\nپیام:\n$message";

	$mailheader = "From:$email\r\n";

	if( mail($recipient, 'پیام جدید در سایت', $formcontent, $mailheader) ){
		echo '1';
	}
	else{
		echo '0';
	}
}

?>