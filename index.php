<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// get regferer server 
if($_SERVER['http_REFERER']==="http://localhost/3000/")
    {
        //get data from  method
        $name=isset($_GET['name'])? $_GET['name']:null ;
        $email=isset($_GET['sendto'])? $_GET['sendto']:null ;
        $message=isset($_GET['message'])? $_GET['essage']:null ;
        if($name && $email &&  $message){
            require 'vendor/autoload.php';
            $mail=new PHPMailer(true);
            try {
                //Server settings
              //  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'marwaaazzabisimplon@gmail.com';                     // SMTP username
                $mail->Password   = 'marwazied123';                               // SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            
                //Recipients
                $mail->setFrom('marwaaazzabisimplon@gmail.com', 'React form');
               // $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
                $mail->addAddress($email);               // Name is optional
                $mail->addReplyTo('marwaaazzabisimplon@gmail.com', 'Information');
                /*$mail->addCC('cc@example.com');
                $mail->addBCC('bcc@example.com');*/
            
                // Attachments
              /*  $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
            
              */  // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = 'React Form';
                $mail->Body    = 'Name:'.$name . '<br/> Email :'.$email .'<br />'.
                                 ' <b>Message:</b>'. $message;
              //  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
            
                $mail->send();
                echo 'Message has been sent';
            } catch (Exception $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
            
        }else{
                echo"ALL the fields are required";
            }

     
    }else {
        echo "You can't use this server"
    }

?>