<?php

require_once('conexion.php');


class usuario extends conexion
{
    public function __construct()
    {
        parent::__construct();
        
    }

//===========================================CRUD USUARIO==============================================

    public function insertar($nombre,$telefono,$email,$mensaje,$noticias)
    {
        //rror_reporting(0);
        try {
            $query  = "INSERT INTO clientes VALUES (:nombre,:telefono,:email,:mensaje,:noticias);";
            $result = $this->db->prepare($query);
            $result->execute(array(':nombre' => $nombre,':telefono' => $telefono, ':email' => $email, ':mensaje' => $mensaje, ':noticias' => $noticias));
            echo 1;
        } catch (PDOException $e) {

            echo ($e->getMessage());
        }
    }

}
?>

