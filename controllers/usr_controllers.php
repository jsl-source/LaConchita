<?php



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '../models/usr_models.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


    $nombre=$_POST['nombre'];
    $telefono=$_POST['telefono'];
    $email=$_POST['email'];
    $mensaje=$_POST['mensaje'];
    $noticias=$_POST['noticias'];

    $ins=new usuario();
    $ins->insertar($nombre,$telefono,$email,$mensaje,$noticias);


    $mennot=($noticias==1)?"Si":"No";


    $body= "Nombre: " .  $nombre  . "<br>Telefono: " . $telefono . "<br>Correo Electronico: " . $email . "<br>Mensaje: " . $mensaje . "<br>Desea recibir noticias del proyecto:" .$mennot;
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 2;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'pag.laconchita.web@gmail.com';                     // SMTP username
        $mail->Password   = 'Z3f4:765*';                               // SMTP password
        $mail->SMTPSecure = 'TLS';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom('pag.laconchita.web@gmail.com',$nombre);
        $mail->addAddress('condominiolaconchitasas@gmail.com'); 
        $mail->addAddress('laconchitareservacampestre@gmail.com');  
        // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Registro de persona desde pagina Web laconchita';
        $mail->Body    = $body;


        $mail->send();
        echo 'El mensaje se envio correctamente 2';
    } catch (Exception $e) {
        echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
    }






?>