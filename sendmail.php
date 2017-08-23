<html>
<head>
<title>ThaiCreate.Com PHP Sending Email</title>
</head>
<body>
<?php
	$strTo = "a5820097@gmail.com";
	$strSubject = $_POST["subject"];
	$strHeader = "Content-type: text/html; charset=windows-874\r\n"; // or UTF-8 //
	$strHeader .= "From: ".$_POST["name"]."<".$_POST["email"].">\r\nReply-To: ".$_POST["email"]."";
	$strMessage = nl2br($_POST["message"]);
	$flgSend = @mail($strTo,$strSubject,$strMessage,$strHeader);  // @ = No Show Error //
	if($flgSend)
	{
		echo "Email Sending.";
	}
	else
	{
		echo "Email Can Not Send.";
	}
?>
</body>
</html>
