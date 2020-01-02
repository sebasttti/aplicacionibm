<?php

class Index extends Controller{

      private $db;
      
      public function __construct($method,$parameters){

        $this->db = new Database;        
        $this->$method();

      }

      public function index(){ //este es el metodo que carga la pagina
        echo "Este es el índice de la página";        
      }

      public function ejemplo(){
        $this->db->query("SELECT * FROM cliente");
        $result = $this->db->responseAll();

        imprimirJSON($result);
      }

}

 ?>
