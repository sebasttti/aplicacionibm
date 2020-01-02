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

      public function getallinfo(){

        $table = $_REQUEST['table'];        

        $this->db->query("SELECT * from $table");

        $res = $this->db->responseAll();

        imprimirJSON($res);

      }

      public function getinfo(){


        $id=$_REQUEST['id'];
        $table = $_REQUEST['table'];

        if($table == 'consumo'){
          $aux = "tarjeta_";
        }else{
          $aux = "";
        }


        $this->db->query("SELECT * from $table where id_$aux$table = $id");

        $res = $this->db->responseAll();

        imprimirJSON($res);




      }

}

 ?>
