<?php
class Conexion
{
    protected $db;
    public function __construct()
    {
        $this->db = $this->conectar();
    }
    public function conectar()
    {
        try {
                // $HOST   = 'localhost';
                // $DBNAME = 'laconchi_clientes';
                // $USER   = 'laconchi_laconch';
                // $PASS   = '1qaw3edr52020*';
                $HOST   = 'localhost';
                $DBNAME = 'laconchi_clientes';
                $USER   = 'root';
                $PASS   = '';
                $con    = new PDO("mysql:host={$HOST}; dbname={$DBNAME}", $USER, $PASS);
                $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $con->exec('SET CHARACTER SET UTF8');

        
        }catch (PDOException $e) {
            echo $e->getMessage();
        }
        return $con;
    }
  
}


?>
