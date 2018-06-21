<?php 
    session_start();    
    
    if (!isset($_SESSION['salt']) || $_SESSION['salt'] != 'ai14!.b7FG{vAG6?^u13b-b_& sH(u/@8O#<k#?>jwP@Ggw-8E)P(otQ!T IR,co' || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        //header('Location: /index.php');       
        echo json_encode(Array('type' => 'error'));
        exit;
    }
    $req_type = $_REQUEST['req_type'];    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    function send_partner_email() {        
        $values = array();
        parse_str($_POST['data'], $values);
        if(empty($values)) {
             echo json_encode(Array("type" => "error"));
             exit;
        }  
        require $_SERVER['DOCUMENT_ROOT'].'/../phpmailer/src/Exception.php';
        require $_SERVER['DOCUMENT_ROOT'].'/../phpmailer/src/PHPMailer.php';
        require $_SERVER['DOCUMENT_ROOT'].'/../phpmailer/src/SMTP.php';
        
        $mail = new PHPMailer(true);   
        try {
            //Server settings
            $mail->SMTPDebug = 0;                                 // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'vegaspro.info@gmail.com';                 // SMTP username
            $mail->Password = 'ok98jfytts';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to
        
            //Recipients
            $mail->setFrom('vegasinfo@gmail.com', 'Mailer');
            //$mail->addAddress('iivankov@firstgaming.com', 'Ihor');
            $mail->addAddress('partnerbkinfo@gmail.com', 'Partner');
            //$mail->addAddress('sherasymovych@firstgaming.com', 'Sergey');
            
            //Content            
            $txt = "
            <div style='width: 400px; height: 400px; border-radius: 10px; padding: 20px; text-align: center; background: light-blue;'>
                <h3>Новый отклик с сайта vegas-kings.info</h3>
                <h2>Имя: ".$values['name']."</h2>
                <h2>Телефон: ".$values['tel']."</h2>
                <h2>Email: ".$values['email']."</h2>
            </div>";          
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Request from vegas-kings.info';
            $mail->Body = $txt;
            $mail->send();            
        } catch (Exception $e) {
            echo json_encode(Array('type' => 'error', "message"=>$mail->ErrorInfo));            
            return;
        }
        
        echo json_encode(array("type"=>"success"));
    }

    switch($req_type) {
        case 'send_email': send_partner_email(); break;
        default: break;
    }
    
?>
